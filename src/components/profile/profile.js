import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {useSelector, useDispatch} from "react-redux";
import {picked} from "../../store/profile";

export const Profile = () => {
    // const [state, setState] = React.useState({
    //     checkedA: useSelector((state) => state.stateCheckbox)
    // });
    const checked = useSelector((state) => state.stateCheckbox)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        // setState({ ...state, [event.target.name]: event.target.checked });
        dispatch(picked())
    };
    return (
        <>
            <h1>Заглушка для страницы профиля</h1>
            <FormGroup row>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} name="checkedA" />}
                    label="Secondary"
                />
            </FormGroup>
        </>
    )
}