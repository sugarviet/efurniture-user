import { Form } from "antd";
import FormInput from "@components/FormInput";
import { useUpdateWithAuth } from "@hooks/api-hooks";

import { get_update_name, get_user_info_detail } from "@api/profileApi";
import { withFetchDataWithHeaders } from "@hocs/withFetchDataWithHeaders";
import { message } from "antd";
import Proptypes from "prop-types";

const ChangingName = ({ data }) => {
  const { mutate } = useUpdateWithAuth(
    get_update_name(),
    undefined,
    () => {
      message.success("Successfully updated");
    },
    () => {
      message.success("updated failed");
    }
  );
  if (!data) return null;

  const onFinish = (values) => {
    console.log("Success:", values);
    mutate(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="my-4">
      <p className="font-bold mb-3">Change personal info</p>
      <Form
        name="changeName"
        labelCol={{
          span: 24,
        }}
        initialValues={data}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <FormInput
          label="First Name"
          name="first_name"
          className="w-1/2 h-10"
        />
        <FormInput label="Last Name" name="last_name" className="w-1/2 h-10" />

        <div className="flex flex-col gap-5 text-base w-[40rem]">
          <p>
            When you sign up for BoConcept newsletters, you agree to receive
            news and information regarding events via email from BoConcept A/S
            and your preferred/closest BoConcept store.
          </p>

          <p>You can at any time revoke this consent.</p>

          <p>
            Read more in our{" "}
            <a href="#" className="underline hover:text-black">
              Privacy Policy
            </a>{" "}
            in which we describe how we treat personal information, legislation
            and more.
          </p>

          <p className=" text-gray-400">
            I accept the BoConcept privacy policy{" "}
            <a href="#" className="underline">
              See privacy policy
            </a>
          </p>
          <button
            type="submit"
            className="furniture-button-black-hover text-sm px-6 py-4 w-48"
          >
            Apply
          </button>
        </div>
      </Form>
    </section>
  );
};

ChangingName.propTypes = {
  data: Proptypes.object,
};

export default withFetchDataWithHeaders(ChangingName, get_user_info_detail);
