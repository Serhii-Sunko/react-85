import { QuizForm } from "./QuizForm/QuizForm";
import toast, { Toaster } from 'react-hot-toast';
import { QuizList } from "./QuizList/QuizList";
import { SearchBar } from "./SearchBar";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { useState } from "react";
import { createQuiz, deleteQuizById, fetchQuizzes } from "api";

export const App = () => {
  const [quizItems, setQuizItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [filters, setFilters] = useState({
    topic: "",
    level: "all",
  })

const addQuiz = async newQuiz => {
  try {
    setLoading(true)
    setError(false)
    const addedQuiz = await createQuiz(newQuiz);
    setQuizItems(prevItems=>[...prevItems, addedQuiz])
    toast.success('ADDED NEW QUIZ!');
  } catch (error) {
    setError(true)
    } finally {
    setLoading(false)
}
  }

const deleteQuiz = async quizId => {
    try {
      setLoading(true)
      setError(false)
      const deleteQuiz = await deleteQuizById(quizId);
      setQuizItems(prevItems =>
        prevItems.filter(
        quiz => quiz.id !== deleteQuiz.id))
      toast.success('ALL DONE GOOD!');
    } catch (error) {
      setError(true)
    } finally {
    setLoading(false)
    }
  };

  const changeLevelFilter = (newLevel) => {
    setFilters(prevFilters => ({
      ...prevFilters, 
      level: newLevel,
    }))
  }

 const changeTopicFilter = (newTopic) => {
 setFilters(prevFilters => ({
      ...prevFilters, 
      topic: newTopic,
    }))

  }

 const resetFilters = () => {
    setFilters(prevFilters => ({
        topic: "",
        level: "all",
    }))
  };

const visibleItems = quizItems.filter(
      quiz => {
        const hasTopic = quiz.topic.toLowerCase().includes(filters.topic.toLowerCase());
        if (filters.level === "all") {
          return hasTopic;
        }
        return hasTopic && quiz.level === filters.level;
      });

  return (
    <Layout>
        <QuizForm onAdd={addQuiz} />
        <SearchBar
          level={filters.level}
          topic={filters.topic}
          onChangeLevel={changeLevelFilter}
          onChangeTopic={changeTopicFilter}
          onReset={resetFilters}
        />
        {loading && <div>LOADING ..........</div>}
        {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
        {visibleItems.length > 0 && <QuizList items={visibleItems} onDelete={deleteQuiz} />}
        
        <GlobalStyle />
        <Toaster position="top-right"/>
      </Layout>)
   
}
