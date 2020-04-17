import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchCountries } from "../api";
import styles from "../components/CountryPicker/CountryPicker.module.css";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    MuiNativeSelect: {
        marginTop: theme.spacing(2),
    },
}));
const Bangladesh = ({ handleCountryChange }) => {
    const classes = useStyles();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);

    return (
        <FormControl className={(styles.formControl, classes.formControl)}>
            <NativeSelect
                variant="outlined"
                defaultValue=""
                onChange={(e) => handleCountryChange(e.target.value)}
            >
                <option value="">Global</option>
                {countries.map((country, i) => (
                    <option key={i} value={country}>
                        {country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default Bangladesh;
