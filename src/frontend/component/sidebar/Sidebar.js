import React, { useState, useEffect, useContext } from "react";
import { Sidenav, Nav } from "rsuite";
import { axiosGet } from "../../utils/Helper";
import { toast } from "react-toastify";
import "./Sidebar.css";
import { filterContext } from "../layout/Layout";
export default function Sidebar(props) {
    const { filter, setFilter } = useContext(filterContext);
    const [activeKey, setActiveKey] = useState("1");
    const [categories, setCategories] = useState([]);

    const getCategoryList = async () => {
        await axiosGet("/api/categories")
            .then((res) => {
                console.log("res", res);
                console.log("res.data.categories", res.data.categories);
                setCategories(res.data.categories);
            })
            .catch((error) => {
                toast.error(error);
            });
    };

    useEffect(() => {
        getCategoryList();
    }, []);
    return (
        <>
            <Sidenav className="sidebar">
                <Sidenav.Body>
                    <Nav activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Menu placement="rightStart" eventKey="3" title="Price">
                            <Nav.Item eventKey="3-1">Geo</Nav.Item>
                            <Nav.Item eventKey="3-2">Devices</Nav.Item>
                            <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                            <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu placement="rightStart" eventKey="3" title="Rating">
                            <Nav.Item eventKey="3-1">Geo</Nav.Item>
                            <Nav.Item eventKey="3-2">Devices</Nav.Item>
                            <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                            <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu placement="rightStart" eventKey="4" title="Category">
                            {categories &&
                                categories.map((category, index) => {
                                    return (
                                        <Nav.Item
                                            eventKey={`3-${index}`}
                                            // onClick={() =>
                                            //     setFilter((data) => {
                                            //         return {
                                            //             ...data,
                                            //             category: category.categoryName,
                                            //         };
                                            //     })
                                            // }
                                        >

                                            {category.categoryName}
                                        </Nav.Item>
                                    );
                                })}
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </>
    );
}
