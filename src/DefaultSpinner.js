import React from 'react';
import {Intent, Portal, Spinner} from "@blueprintjs/core";

const DefaultSpinner = () => (
    <Portal className="vh-100 vw-100 d-flex">
        <Spinner className="m-auto" intent={Intent.PRIMARY}/>
    </Portal>
);

export default DefaultSpinner;