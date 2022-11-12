import type { NextPage } from "next";

import {
  Button,
  Divider,
  Flex,
  Heading,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  useAuthenticator,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { createMeal, deleteMeal } from "../src/graphql/mutations";
import { listMeals, listUserGroups } from "../src/graphql/queries";
import { onCreateMeal } from "../src/graphql/subscriptions";

/*
export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listMeals });

  return {
    props: {
      serverMeals: response.data.listMeals.items,
    },
  };
}
*/

const Home: NextPage = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [meals, setMeals] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setContent] = useState("");
  const [userGroup, setUserGroup] = useState("");

  useEffect(() => {
    const fetchMeals = async () => {
      const result = await API.graphql(graphqlOperation(listMeals));
      setMeals(result.data.listMeals.items);
    };

    fetchMeals();
    const createSub = API.graphql(graphqlOperation(onCreateMeal)).subscribe({
      next: ({ value }) => {
        setMeals((meals) => [...meals, value.data.onCreateMeal]);
      },
    });

    return () => {
      createSub.unsubscribe();
    };
  }, []);

  async function handleCreateMeal() {
    try {
      const { data } = await API.graphql({
        //authMode: "AMAZON_COGNITO_USER_POOLS",
        query: createMeal,
        variables: {
          input: {
            title,
            description,
          },
        },
      });

      setTitle("");
      setContent("");
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }

  async function onDeleteMeal(id) {
    try {
      const { data } = await API.graphql({
        //authMode: "AMAZON_COGNITO_USER_POOLS",
        query: deleteMeal,
        variables: {
          input: {
            id,
          },
        },
      });
    } catch ({ errors }) {
      console.error(...errors);
    }
  }

  async function getUserGroup() {
    try {
      const { data } = await API.graphql({
        query: listUserGroups,
        variables: {
          filter: {
            or: {
              owners: {
                contains: user.username,
              },
            },
          },
        },
      });

      setUserGroup(data.listUserGroups?.items[0].id);
    } catch ({ errors }) {
      console.error(errors);
      //console.error(...errors);
      //throw new Error(errors[0].message);
    }
  }

  return (
    <View padding="2rem">
      <Flex direction={"row"}>
        <Heading level={2}>Admin</Heading>
      </Flex>
      <Flex direction={"row"}>
        <Heading level={4}>
          Welcome {user.attributes?.email} ({userGroup})
        </Heading>
        <Button type="button" onClick={getUserGroup}>
          Get User Group
        </Button>
        <Button type="button" onClick={signOut}>
          Sign out
        </Button>
      </Flex>
      <View as="main" paddingTop="2rem" width={"50%"}>
        <Heading level={5}>New Meal</Heading>
        <form>
          <TextField
            label="Title"
            errorMessage="There is an error"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            name="description"
            label="Desc"
            errorMessage="There is an error"
            onChange={(e) => setContent(e.target.value)}
          />
          <br />

          <Button marginTop="large" onClick={() => handleCreateMeal()}>
            Create
          </Button>
        </form>
      </View>
      <Divider padding="medium" />
      {meals.length === 0 && <View paddingTop="2rem">No Meals</View>}
      {meals.length > 0 && (
        <View paddingTop="2rem">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Desc</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {meals.map((meal) => (
                <TableRow key={meal.id}>
                  <TableCell>{meal.id}</TableCell>
                  <TableCell>{meal.title}</TableCell>
                  <TableCell>{meal.content}</TableCell>
                  <TableCell>
                    <Button onClick={() => onDeleteMeal(meal.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </View>
      )}
    </View>
  );
};

export default withAuthenticator(Home);

/*
const Home: NextPage = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <p>
            Welcome {user.attributes?.email}
            <br />
            <button onClick={signOut}>Sign Out</button>
          </p>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center"></footer>
    </div>
  );
};
*/
