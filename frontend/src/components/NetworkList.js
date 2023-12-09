
import React, { useState, useEffect, useRef } from 'react';

const NetworkList = () => {
  const [networks, setNetworks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const loader = useRef(null);
  const [page, setPage] = useState(1); // 当前页码
  const [hasMore, setHasMore] = useState(true); // 是否还有更多数据
  const pageSize = 10; // 每次加载的网络数量

  const loadMoreNetworks = () => {
    if (!hasMore) return; // 如果没有更多数据，则不执行加载

    setIsLoading(true);
    fetch(`http://localhost:8000/scan?page=${page}&pageSize=${pageSize}`) // 使用 pageSize
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.network && data.network.length > 0) {
          setNetworks(prevNetworks => [...prevNetworks, ...data.network]);
          setPage(prevPage => prevPage + 1); // 增加页码
        } else {
          setHasMore(false); // 没有更多数据
        }
      })
      .catch(error => {
        setError(error);
        console.error('There was a problem with your fetch operation:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        loadMoreNetworks(); // 达到底部时加载更多网络
      }
    }, { threshold: 1 });

    const currentLoader = loader.current;

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [page]); // 添加 page 作为依赖项

  const handleNetworkClick = (network) => {
    setSelectedNetwork(network.BSSID); // 或者使用其他唯一标识符
  };

  const networkStyle = (network) => {
    return selectedNetwork === network.BSSID ? 
      { marginBottom: '10px', border: '2px solid blue', padding: '10px' } : 
      { marginBottom: '10px', border: '1px solid gray', padding: '10px' };
  };

  return (
    <div>
      {networks.map(network => (
        <div 
          key={network.BSSID} 
          style={networkStyle(network)}
          onClick={() => handleNetworkClick(network)}
        >
          <p>SSID: {network.SSID}</p>
          <p>BSSID: {network.BSSID}</p>
          <p>RSSI: {network.RSSI}</p>
          <p>Channel: {network.CHANNEL}</p>
          <p>HT: {network.HT}</p>
          <p>CC: {network.CC}</p>
          <p>Security: {network.SECURITY}</p>
        </div>
      ))}
      <div ref={loader} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading networks: {error.message}</p>}
    </div>
  );
};

export default NetworkList;
