import React from "react";
import { Table, Header } from "semantic-ui-react";

const TableData = ({ issInfo }) => {
  return (
    <>
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Latitude</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{issInfo.latitude}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Longitude</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{issInfo.longitude}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Velocity</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{issInfo.velocity}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Visibility</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{issInfo.visibility}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Altitude</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{issInfo.altitude}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default TableData;
