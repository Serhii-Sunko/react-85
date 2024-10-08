import { QuizCart } from "../QuizCard/QuizCard";
import { List, ListItem } from "./QuizList.styled";

export const QuizList = ({ items }) => {
    return (
        <List>{items.map(item =>
            <ListItem key={item.id}>
                <QuizCart quiz={ item} />
            </ListItem>
        )}
        </List>
    );
};