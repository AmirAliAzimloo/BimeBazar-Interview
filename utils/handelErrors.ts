import toast from "react-hot-toast";

const handelErrors = (errors: string[]) => {
  errors.map((error) => {
    toast.error(error);
  });
};

export default handelErrors;
