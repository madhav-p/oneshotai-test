import React from "react";
import ErrorOccured from "../widgets/ErrorOccured";
import Loading from "../widgets/Loading";
import { UseQueryResponse } from "urql";
type AsyncProps<T> = {
  dataHandler: (data: T) => JSX.Element;
  useQueryResponse: UseQueryResponse<T>;
};

function Async<T>(props: AsyncProps<T>) {
  const { useQueryResponse, dataHandler } = props;
  if (useQueryResponse === null) return <Loading></Loading>;
  const [result, reexecuteQuery] = useQueryResponse!;

  const { data, fetching, error } = result;
  if (fetching) return <Loading></Loading>;
  if (error) return <ErrorOccured message={error.message}></ErrorOccured>;
  return dataHandler(data!);
}

export default Async;
