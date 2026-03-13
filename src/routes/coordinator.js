export const goToHomePage = (navigate) =>{
    navigate("/")
}

export const goToLoginPage = (navigate) =>{
    navigate("/login")
}

export const goToRegisterPage = (navigate) =>{
    navigate("/register")
}

export const goToCartPage = (navigate) =>{
    navigate("/cart")
}

export const goToProductListPage = (navigate) =>{
    navigate("/productlist")
}

export const goToProductDetailPage = (navigate,product) =>{
    navigate(`/detailspage/${product}`)
}


