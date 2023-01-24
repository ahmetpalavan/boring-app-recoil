import { selector } from "recoil";
import { Types } from "../module/constant";
import { filterState, textState } from "./atoms";

export const filteredTextState = selector({
    key: "filteredTextState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const filter = get(filterState);
        const list = get(textState);

        if(filter === Types[0]){
            return list
        } else {
            return list.filter((i) => i.type === filter);
        }
    }
});