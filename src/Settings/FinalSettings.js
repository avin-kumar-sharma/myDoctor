import  Settings  from './Settings';
import React from 'react';
import ProtectedPage from '../layout/Page/protectedpage';
const Final=()=>{
    return (
        <>
        <ProtectedPage>
            <Settings/>
        </ProtectedPage>
        </>
    )
}
export default Final;