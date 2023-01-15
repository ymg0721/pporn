import React from "react";
import SearchIcon from '@mui/icons-material/Search';

/**
 * ページヘッダーの左端に記載されるアイコン
 */
export const HeaderSearch = () => {
    return (
        <>
        <div className="search">
            <input/>
            <button>検索</button>
            <SearchIcon/>
        </div>
        </>
);
}