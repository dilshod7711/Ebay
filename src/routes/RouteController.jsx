import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../routes/home/Home"));
const Single = lazy(() => import("../routes/single/Single"));
const Login = lazy(() => import("../routes/login/Login"));
const Category = lazy(() => import("../routes/category/Category"));
import Nav from "../components/navbar/Nav";

const Loading = () => {
    return <div>Loading...</div>;
};

const Error = () => {
    return <div>Error</div>;
};

const NotFound = () => {
    return <div>Not Found</div>;
};

const LoadingFallback = () => {
    return <div>Loading...</div>;
};

const RouteController = () => {
    const location = useLocation();
    const hideNavOnPaths = ["/login"]; // List of paths where Nav should be hidden

    return (
        <>
            {!hideNavOnPaths.includes(location.pathname) && <Nav />}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="/category"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <Category />
                        </Suspense>
                    }
                />
                <Route
                    path="/single/:id"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <Single />
                        </Suspense>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Suspense fallback={<LoadingFallback />}>
                            <Login />
                        </Suspense>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default RouteController;
