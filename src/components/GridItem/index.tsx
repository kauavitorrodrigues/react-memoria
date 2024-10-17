import { GridItemType } from "../../types/GridItemType";
import b7 from "../../svgs/b7.svg"
import * as C from "./styles";
import { Items } from "../../data/Items";

type Props = {
    item: GridItemType
    onClick: () => void
}

export const GridItem = ({ item, onClick } : Props ) => {
    return (

        <C.Container onClick={onClick} showBackground={item.permanentShown || item.shown} >

            { item.permanentShown === false && item.shown === false && 
                <C.Icon src={b7} opacity={.1} />
            }

            { (item.permanentShown || item.shown) && item.item !== null && 
                <C.Icon src={Items[item.item].icon} />
            }

        </C.Container>

    )
}