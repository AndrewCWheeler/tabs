import React from "react";
import styles from "./TabComponent.module.css";

const TabForm = (props) => {
  const { tab, setTab, newSubmit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    newSubmit();
  };

  const onChange = (e) => {
    setTab({
      ...tab,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="label">Label</label>
        <input
          className="form-control form-control-lg"
          type="text"
          size="lg"
          name="label"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <input
          className="form-control form-control-lg"
          type="text"
          size="lg"
          name="content"
          onChange={onChange}
        />
      </div>
      <input
        type="submit"
        className="my-5 btn-block btn-primary btn-lg"
        value="Add Tab"
      />
    </form>
  );
};

export default TabForm;
