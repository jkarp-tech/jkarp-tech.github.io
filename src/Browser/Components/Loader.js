import React from "react";

import { StyledLoader, LoaderCard } from "./Styles/LoaderStyles";

const Loader = ({ height = null }) => (
    <LoaderCard height={height}>
        <StyledLoader />
    </LoaderCard>
);
export default Loader;
