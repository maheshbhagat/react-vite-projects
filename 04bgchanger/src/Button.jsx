import React from 'react';
import BgChanger from './BgChanger';

function Button({bgcolor}){
    return(
        <button
            type="button"
            style={{ background: bgcolor }}
            className="rounded-md px-3 py-2 text-sm font-semibold text-white w-40"
            onClick={BgChanger(bgcolor)}
        >
            {bgcolor}
        </button>
    )
}

export default Button