import { useParams } from "react-router-dom";

const Word = props => {
    const { color, word, bgCol } = useParams();
    return (
        <div>
            {
                isNaN(word)?
                <h1 style={color? {color: color, backgroundColor: bgCol, textAlign:"center"}: null}>
                    This is a word: { word } 
                    </h1>
                :
                <h1 style={{textAlign:"center"}}> This is a number: { word }</h1>
                

            }

        </div>
    );
}

export default Word;
