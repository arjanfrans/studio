import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import Copyright from "../Copyright";

const footers = [
    {
        title: 'Links',
        description: [
            {
                title: 'Instagram', url: 'https://www.instagram.com/musicstudiohard'
            },
        ],
    },
    {
        title: 'Legal',
        description: [
            {
                title: 'Privacy policy', url: '/privacy'
            },
            {
                title: 'Terms of use', url: '/terms'
            }
        ],
    },
];


export function Footer() {
    return (
        <Container
            maxWidth="md"
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
            }}
        >
            <Grid container spacing={4} justifyContent="space-evenly">
                {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map((item) => (
                                <li key={item.title}>
                                    <Link href={item.url} variant="subtitle1" color="text.secondary">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                ))}
            </Grid>
            <Copyright/>
        </Container>
    );
}
