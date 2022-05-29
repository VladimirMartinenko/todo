import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import ACTION_TYPES from "../../actions/actionTypes";
import * as actionCreators from "./../../actions/actionCreator";

function Todo(props) {
  const { state, onSubmit, toggleTodoCompletion, removeTodo } = props;
  // const onSubmit = (value,formikBag) =>{
  //   dispatch(
  //     actionCreators.addTodo(value));formikBag.resetForm()};

  //   const removeTodo = (id) => dispatch(actionCreators.deleteTodo(id))

  //   const toggleTodoCompletion = (id) => dispatch(actionCreators.changesTodo(id))

  return (
    <article className="container">
      <div>
        <Formik initialValues={{ text: "" }} onSubmit={onSubmit}>
          <Form>
            <Field name="text" placeholder="new task" />
            <button type="submit">Add task</button>
          </Form>
        </Formik>
      </div>
      <div className="container">
        <h2>Tasks</h2>
        <ul>
          {state.map((todo) => (
            <li>
              <input type="checkbox" onChange={toggleTodoCompletion} />
              {JSON.stringify(todo)}
              <span onClick={removeTodo}>x</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
function mapStateToProps(state) {
  return { state };
}
function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (value, formikBag) => {
      dispatch(actionCreators.addTodo(value));
      formikBag.resetForm();
    },

    removeTodo: (id) => dispatch(actionCreators.deleteTodo(id)),

    toggleTodoCompletion: (id) => dispatch(actionCreators.changesTodo(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
