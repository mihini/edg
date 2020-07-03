import {
  useEffect,
  useState
} from 'react';

const apiKey = 'RGAPI-7cf3230b-1bbb-4534-93a4-7615dac615bd';
const baseUrl = 'https://kr.api.riotgames.com/';
const cors = 'https://cors-anywhere.herokuapp.com/';

const useDataApi = (endpoint) => {
  const [dataState, setDataState] = useState({ data: [], isFetching: false });

  useEffect(() => {
    const fetchData = async () => {
      const url = `${cors}${baseUrl}${endpoint}&api_key=${apiKey}`;
      try {
        setDataState({ ...dataState, isFetching: true });
        const response = await fetch(url);
        const data = await response.json();


        setDataState({
          ...dataState,
          data,
          isFetching: false
        });
      } catch (err) {
        console.log(err);
        setDataState({ ...dataState, isFetching: false });
      }
    };
    fetchData();
  }, []);
  return [dataState];
}
export default useDataApi;
