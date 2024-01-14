import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({items}) => {
return (
    <div>
    <table className={css.transactionHistory}>
  <thead className={css.theadContainer}>
    <tr className={css.trTable}>
      <th className={css.thTable}>Type</th>
      <th className={css.thTable}>Amount</th>
      <th className={css.thTable}>Currency</th>
    </tr>
  </thead>

   {items.map(tran => 
     <tbody className={css.tbodyTran} key={tran.id}>
     <tr className={css.trTran}>
     <td className={css.tdTran}>{tran.type}</td>
     <td className={css.tdTran}>{tran.amount}</td>
     <td className={css.tdTran}>{tran.currency}</td>
   </tr>
   </tbody>
   )}
</table>
</div>
)
}