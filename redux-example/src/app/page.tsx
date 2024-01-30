"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { increment, decrement } from "@/redux/features/counterSlice";
import { useGetUserQuery } from "@/redux/services/userApi";

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  const { data, error, isLoading, isFetching } = useGetUserQuery(null);

  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <div className="m-5">
        <h1 className="text-center text-2xl">Count is {count}</h1>
        <button
          className="bg-green-500 px-3 py-2 rounded-md mx-1"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          className="bg-red-500 px-3 py-2 rounded-md mx-1"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {isFetching || isLoading ? "Loading..." : ""}
        {error ? "Error Ocurred..." : ""}
        {data?.map((user): React.ReactNode => {
          return (
            <div
              key={user.id}
              className="border-dotted border-2 border-black-100 rounded-md"
            >
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>E-mail: {user.email}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
