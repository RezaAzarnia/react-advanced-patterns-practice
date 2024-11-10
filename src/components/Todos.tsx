import { Link } from "react-router-dom";
import { Todo } from "../types";
import Modal from "./Modal";
import ModalInfo from "./ModalInfo";
import { memo } from "react";

type Props = {
  todos: Todo[];
};

 function Todos({ todos }: Props) {
  return (
    <>
      {todos?.map((item: Todo) => {
        return (
          <div
            key={item.id}
            className="flex items-center justify-between w-full space-y-2"
          >
            <Link
              to={`singleTodo/${item.id}`}
              className="text-blue-600 underline"
            >
              {item.title}
            </Link>
            <Modal>
              <>
                <Modal.Open opens="todo">
                  <button className="px-3 py-2 text-white capitalize transition-colors bg-teal-700 rounded-md outline-none hover:bg-teal-800">
                    show infos
                  </button>
                </Modal.Open>
                <Modal.Body opensName="todo">
                  <ModalInfo todo={item} />
                </Modal.Body>
              </>
            </Modal>
          </div>
        );
      })}
    </>
  );
}
export default memo(Todos);