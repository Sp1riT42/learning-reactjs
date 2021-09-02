import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getGists} from "../../store/gists/thunks";

export const Gists = () => {
    const {gistsPending, gists, gistsError} = useSelector(
        (state) => state.gistsReducer
    )
    const dispatch = useDispatch()

    useEffect(() => {
        if (!gists.length) {
            dispatch(getGists())
        }
    }, [dispatch, gists])
    if(gistsPending) {
        return <h1>pending...</h1>
    }

    if(gistsError) {
        return <h1>ooopppss....</h1>
    }
    return(
        <div>
            {Array.from({length: 10}).map((_, index) => (
                <button key={index}
                        onClick={() => dispatch(getGists(index + 1))}
                >
                    button {index}
                </button>
            ))}
            {/*<h1>Gists page</h1>*/}
            <ul>
                {gists.map((gist, index) => (
                    <li key={index}>{gist.description}</li>
                ))}
            </ul>
        </div>

    )
}