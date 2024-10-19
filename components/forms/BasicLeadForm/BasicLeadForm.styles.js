import styled from "styled-components";
import { Row } from "antd";


const ButtonsRow = styled(Row)`
margin: 1rem 0;
@media screen and (max-width: 420px) {
  flex-direction: column-reverse;
}
`

export {
  ButtonsRow
}
