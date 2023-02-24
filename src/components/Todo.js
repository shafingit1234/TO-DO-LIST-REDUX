import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addToList, deleteFromList, removeFromList } from "../actions";
import {
  addToList,
  removeFromList,
  deleteListItem,
} from "../redux/slices/todoSlice";
import "./Todo.css";
function Todo() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  // const list = useSelector((state) => state.todoReducers.list);
  const list = useSelector((state) => state.todoReducer.list);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption> Add You List Here :)</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder=" Add Items .."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {/* <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addToList(inputData), setInputData(""))}
            ></i> */}
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addToList(inputData), setInputData(""))}
            ></i>
          </div>
          <div className="showItems">
            {list.map((e) => {
              return (
                <div className="eachItem" key={e.id}>
                  <h3> {e.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => dispatch(removeFromList(e.id))}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="remove All"
              onClick={() => dispatch(deleteListItem())}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
