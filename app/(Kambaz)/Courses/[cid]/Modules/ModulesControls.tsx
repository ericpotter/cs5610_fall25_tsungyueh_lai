import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import GreyUncheckmark from "./GreyUncheckmark";
export default function ModulesControls() {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="plus-icon position-relative me-2"/>
                Module
            </Button>
            <Dropdown className="float-end me-2">
                <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
                    <GreenCheckmark /> Publish All
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem id="wd-publish-all">
                        <GreenCheckmark /> Publish All
                    </DropdownItem>
                    <DropdownItem id="wd-publish-all-modules-and-items">
                        <GreenCheckmark /> Publish all modules and items
                    </DropdownItem>
                    <DropdownItem id="wd-publish-modules-only">
                        <GreenCheckmark /> Publish modules only
                    </DropdownItem>
                    <DropdownItem id="wd-unpublish-all-modules-and-items">
                        <GreyUncheckmark/> Unpublish all modules and items
                    </DropdownItem>
                    <DropdownItem id="wd-unpublish-modules-only">
                        <GreyUncheckmark/> Unpublish modules only
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Button variant="secondary" size="lg" id="wd-view-progress" className="float-end me-2">View Progress</Button>
            <Button variant="secondary" size="lg" id="wd-collapse-all" className="float-end me-2">Collapse All</Button>
        </div>
    );
}