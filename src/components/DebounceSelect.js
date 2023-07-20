import { useMemo, useRef, useState } from "react";
import { Select, Spin } from "antd";
import debounce from "lodash/debounce";
import API from "./API";

export default function DebounceSelect({
  debounceTimeout,
  searchParam,
  url,
  mapper = (v) => ({ value: v.id, label: v.name }),
  params = {},
  ...props
}) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);

  const fetchUserList = useMemo(
    () => async (searchQuery) => {
      const { data } = await API.post(url, {
        [searchParam]: searchQuery,
        isActive: true,
        ...params,
      });

      return data.model.map(mapper);
    },
    [url, mapper]
  );

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchUserList(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchUserList, debounceTimeout]);

  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}
