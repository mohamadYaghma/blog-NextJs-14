
export async function middlewareAuth(req) {
    const options = {
        method: "GET",
        credentials: "include",
        headers: {
          Cookie:
            `${req.cookies.get("accessToken")?.name}=${
              req.cookies.get("accessToken")?.value
            }; ${req.cookies.get("refreshToken")?.name}=${
              req.cookies.get("refreshToken")?.value
            }` || "-",
        },
      };
    
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/profile`,
        options
      )
        .then((res) => res.json())
        .then((res) => res.data);
      const { user } = data || {};
      return user;
}
 