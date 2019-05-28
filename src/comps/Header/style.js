import styled from 'styled-components'

import menu_icon from '../../pic/menu_icon.png'
import refrash_icon from '../../pic/refrash_icon.png'

export const HeaderStyle = styled.div`
    display: flex;
    font-size: 1rem;
    padding: 1.75em 1.25rem 1.25em;
    color: #4d6078;

    .menu,
    .reload {
        flex: 1 1;
        background-image: url(${refrash_icon});
        background-size: auto 80% ;
        background-position: 100% 50%;
        background-repeat: no-repeat;
    }

    .menu {
        background-image: url(${menu_icon});
        background-position: 0% 50%;
    }

    .title {
        flex: 3 1;
        text-align: center;
        font-weight: bold;
    }

    .reload {
        text-align: right;
    }
`
