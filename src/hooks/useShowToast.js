import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

function useShowToast() {
  const toast = useToast();
  // useCallback caches the toast function in memory preventing reallocation
  // of it on each render
  // since showToast is used in the dependency array of useEffect hook in
  // UserPage.jsx, reallocation would cause useEffect to update render
  // infinitely
  const showToast = useCallback(
    (title, description, status) => {
      toast({
        title: title,
        description: description,
        status: status,
        duration: 3000,
        isClosable: true,
      });
    },
    [toast]
  );
  return showToast;
}

export default useShowToast;
