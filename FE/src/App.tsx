import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

import LoadingProgress from "@/components/common/LoadingProgress";
import Routers from "@/routers";

const App = () => {
  // FIXME 임시 OAuth
  const isOAuth = true;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingProgress />}>
          <Routers isOAuth={isOAuth} />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
