

export const BAD_REQUEST = (gqlErrors:any) => {
    if(gqlErrors.message === "Bad Request")
        return gqlErrors.graphQLErrors[0].extensions.exception.data.message[0].messages[0].message;
}