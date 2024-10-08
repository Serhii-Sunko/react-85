import { RiDeleteBinLine } from "react-icons/ri";
import { Button, MetaText, MetaWrapper, Topic, Wrapper } from "./QuizCard.styled"
export const QuizCart = ({ quiz: {id, topic, level, time, questions}, onDelete }) => {
    return (
        <Wrapper level={level}>
            <Topic>{topic}</Topic>
            <MetaWrapper>
                <MetaText color="red">
                    <b>Level:</b>{level}
                </MetaText>
                <MetaText color="green">
                    <b>Time:</b>{time}
                </MetaText>
                <MetaText>
                    <b>Questions:</b>{questions}
                </MetaText>
            </MetaWrapper>
            <Button onClick={()=> onDelete(id)}>
                <RiDeleteBinLine />
                </Button>
        </Wrapper>
    )
} 