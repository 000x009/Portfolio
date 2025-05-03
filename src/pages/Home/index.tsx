import {Page} from "../Page";
import {Header} from "../../widgets/header";
import {InformationWidgets} from "../../widgets/information";
import {Introduction} from "../../widgets/introduction";
import {Me3D} from "../../widgets/me-3d";

export const HomePage = () => {
    return (
        <Page>
            <Header/>
            <Introduction/>
            <Me3D/>
            <InformationWidgets/>
        </Page>
    );
};
