import "./App.css";
import styled from "styled-components";
import FreindsCnt from "./Components/Friend/FriendsCnt";
import Split from "./Components/Split/Split";
import { useState } from "react";
import { motion } from "framer-motion";


const AppTitle = "Split Bill App".split(" ");

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #e9e3e3;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 70px auto;
  height: 60vh;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  -webkit-background-clip: text;
  color: transparent;
  margin: 0;
  padding: 10px 0;
`;

function App() {
  const [friendArr, setFriendArr] = useState([]);

  const [showform, setShowForm] = useState(true);
  const [split, setSplit] = useState(false);
  const [friendObj, setFriendObj] = useState({});
  const [yourExpense, setYourExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);

  return (
    <>
      <Container>
        <Title>{AppTitle.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i / 2,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}</Title>
        <Wrapper>
          <FreindsCnt
            friendArr={friendArr}
            setFriendArr={setFriendArr}
            showform={showform}
            setShowForm={setShowForm}
            split={split}
            setSplit={setSplit}
            friendObj={friendObj}
            setFriendObj={setFriendObj}
            yourExpense={yourExpense}
            setYourExpense={setYourExpense}
            friendExpense={friendExpense}
            setFriendExpense={setFriendExpense}
          />
          {/* if split is true the split comp will render */}
          {split && (
            <Split
              split={split}
              setSplit={setSplit}
              friendArr={friendArr}
              setFriendArr={setFriendArr}
              friendObj={friendObj}
              yourExpense={yourExpense}
              setYourExpense={setYourExpense}
              friendExpense={friendExpense}
              setFriendExpense={setFriendExpense}
            />
          )}
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
