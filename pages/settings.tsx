import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";
import { joinMealUserGroup } from "../src/graphql/mutations";

type Inputs = {
  userId: string;
  inviteCode: string;
};

const Settings: NextPage = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  console.log("sub", user.attributes?.sub);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await API.graphql({
      query: joinMealUserGroup,
      variables: {
        input: {
          userId: user.attributes?.sub,
          inviteCode: data.inviteCode,
        },
      },
    });
    console.log("result", result);
  };

  console.log(watch("inviteCode"));

  return (
    <div>
      <div>Join Group</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor="inviteCode"
          className="block text-sm font-medium text-gray-700"
        >
          Invite Code
        </label>
        <div className="mt-1">
          <input
            id="inviteCode"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("inviteCode", { required: true })}
          />
          {errors.inviteCode && <span>This field is required</span>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default withAuthenticator(Settings);
