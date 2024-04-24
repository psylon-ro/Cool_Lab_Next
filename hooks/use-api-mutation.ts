import { useState } from "react";
import { useMutation } from "convex/react";

const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);
  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw err;
      });
  };

  return {mutate,pending}
};

export default useApiMutation;
