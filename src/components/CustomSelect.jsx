import styled from "styled-components";
// import Select from "react-select/dist/declarations/src/Select";
import  Select  from "react-select";

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            boredeRadius: 'var(--radii)',
            padding: '0.25rem',
            border: 'none',
            boxShadow: 'var(--shadow)',
            height: '50px',
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-text)',
            backgroundColor: state.isSelected ? 'var(--colors-ui-base)' : 'var(--colors-ui-base)',
        }),
    }
})`
width: 255px;
border-radius: var(--radii);
font-family: var(--family);

& > * {
    box-shadow: var(--shadow);
}

& input {
    padding-left: .25rem;
}

& * {
    color: var(--colors-text) !important;
}

& > div[id] {
    background-color: var(--colors-ui-base);
}
`;