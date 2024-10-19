// import { useContext } from "react";
// import { StocksContext } from "../store/stock.context";
// type StockType = {
//     stockSymbol: string;
//     stockPrice: number;
// }
// const Stock = ({ stockSymbol, stockPrice }: StockType) => {
//     const { deleteStock } = useContext(StocksContext);

//     return (
//         <div className="container">
//             <div className="row kg-row">
//                 <div className="col-6">{stockSymbol}</div>
//                 <div className="col-4">{stockPrice}</div>
//                 <div className="col-2">
//                     <button
//                         type="button"
//                         className="btn btn-danger kg-button"
//                         onClick={() => deleteStock()}
//                     >
//                         Delete
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );

// }

// export default Stock;


// // import { useContext } from "react";
// // import { TodoItemsContext } from "../store/todo-items-store";

// // function TodoItem({ todoName, todoDate }) {
// //   const { deleteItem } = useContext(TodoItemsContext);

// //   return (
// //     <div className="container">
// //       <div className="row kg-row">
// //         <div className="col-6">{todoName}</div>
// //         <div className="col-4">{todoDate}</div>
// //         <div className="col-2">
// //           <button
// //             type="button"
// //             className="btn btn-danger kg-button"
// //             onClick={() => deleteItem(todoName)}
// //           >
// //             Delete
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default TodoItem;