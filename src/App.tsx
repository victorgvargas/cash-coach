import Expenses from './components/expenses/Expenses';

function App() {
  const data = [{
    id: 0,
    date: "20/08/2023",
    receiver: "IKEA",
    amount: 1000
}];

  return (
    <>
      <Expenses data={data}/>
    </>
  );
}

export default App;
