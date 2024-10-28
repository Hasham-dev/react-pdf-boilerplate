import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles for the PDF document
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    color: "#333",
    display: "flex",
    flexDirection: "column",
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    textAlign: "justify",
  },
  header: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 0,
    fontWeight: "bold",
    padding: "20px",
    border: "2px solid #000",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
    textDecoration: "underline",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 12,
  },
  column: {
    flex: 1,
  },
  fieldLabel: {
    fontSize: 10,
    marginBottom: 2,
    fontWeight: "bold",
  },
  fieldContent: {
    // borderBottom: "1px solid #000",
    paddingBottom: 2,
    marginBottom: 8,
    fontSize: 8, // Smaller font size to prevent wrapping
  },
  boxed: {
    border: "1px solid #000",
    padding: 8,
    marginBottom: 10,
  },
  boxFlex: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    height: "140px",
  },
  boxedSectionOne: {
    border: "1px solid #000",
    width: "75%",
    padding: 8,
  },
  boxedSectionOne2: {
    border: "1px solid #000",
    borderLeft: "0px",
    width: "25%",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 10,
  },
  boxedTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  signature: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 10,
  },
  table: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 0,
    borderWidth: 1,
    borderColor: "#000",
  },
  tableRow: {
    display: 'flex',
    flexDirection: "row",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    alignItems: "center",
    fontStyle: "bold",
  },
  tableColHeader: {
    // width: "25%",
    border: "1px solid #000",
    borderTop: "none",
    borderBottom: "none",
    backgroundColor: "#e0e0e0",
    // padding: 5,
    fontWeight: "bold",
    flexGrow: 1,
    padding: 0,
    height: '25px'
  },
  tableCol: {
    border: "1px solid #000",
    borderTop: "none",
    borderBottom: "none",
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  },
  tableHeader: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#000",
    backgroundColor: "#000",
    borderBottomWidth: 1,
    alignItems: "center",
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
});

const BillOfLadingPDF = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      {/* Document Header */}
      <Text style={styles.header}>STRAIGHT BILL OF LADING - SHORT FORM</Text>

      {/* Carrier Information Section */}
      <View style={styles.boxFlex} wrap={false}>
        <View style={styles.boxedSectionOne}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Carrier Name:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Phone:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Carrier Address:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Date:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                City:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Province/Postal:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                SAC:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                DUNS:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.boxedSectionOne2}>
          <View
            style={{
              borderBottom: "1px solid #000",
              width: "100%",
              paddingTop: 10,
              textAlign: "center",
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.fieldLabel}>SHIPMENT IDENTIFICTION NO.</Text>
          </View>
          <View
            style={{
              width: "100%",
              paddingTop: 10,
              textAlign: "center",
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.fieldLabel}>FREIGHT BILL PRO NO.</Text>
          </View>
        </View>
      </View>

      {/* Carrier Information Section */}
      <View style={styles.boxFlex}>
        <View style={{ ...styles.boxedSectionOne, width: "50%" }}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                TO:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Consignee:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Address:{" "}
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                City:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Province/Postal:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.boxedSectionOne2,
            width: "50%",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <View
            style={{
              borderBottom: "1px solid #000",
              width: "100%",
              paddingTop: 10,
              textAlign: "center",
              paddingBottom: 20,
              display: "flex",
              height: "30%",
              flexDirection: "column",
            }}
          >
            <Text style={styles.fieldLabel}>TRAILER/CAR NUMBER</Text>
          </View>
          <View
            style={{
              width: "100%",
              paddingTop: 10,
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
              height: "70%",
              paddingLeft: 10,
            }}
          >
            <Text style={styles.fieldLabel}>ROUTE</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxFlex} wrap={false}>
        <View style={{ ...styles.boxedSectionOne, width: "50%" }}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                FROM:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Shipper:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Address:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                City:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Province/Postal:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.boxedSectionOne2,
            width: "50%",
            padding: 0,
          }}
        >
          <View
            style={{
              width: "100%",
              //   paddingTop: 10,
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
              height: "70%",
              paddingLeft: 10,
            }}
          >
            <Text style={styles.fieldLabel}>SPECIAL INSTRUCTIONS</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxFlex}>
        <View style={{ ...styles.boxedSectionOne, width: "50%" }}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                FOR PAYMENT SEND BILL TO:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Name:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Address:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                City:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.fieldLabel}>
                Province/Postal:
                <Text style={styles.fieldContent}>
                  __________________________
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.boxedSectionOne2,
            width: "50%",
            padding: 0,
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              width: "100%",
              paddingBottom: 20,
              display: "flex",
              flexDirection: "column",
              height: "90%",
              paddingLeft: 10,
            }}
          >
            <Text style={styles.fieldLabel}>SHIPPER'S INTERNAL DATA</Text>
          </View>
          <View
            style={{
              width: "50%",
              paddingTop: 2,
              display: "flex",
              paddingLeft: 4,
              border: "1px solid #000",
              borderLeft: "0px",
              borderBottom: "0px",
              flexGrow: 1
            }}
          >
            <Text style={styles.fieldLabel}>SID NO.</Text>
          </View>
        </View>
      </View>

      {/* Table Header */}
      <View style={styles.table} wrap={false}>
        <View style={styles.tableHeader}>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "10%",
            }}
          >
            Number Shipping Units
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "5%",
            }}
          >
            *HQ
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "55%",
            }}
          >
            Kinds of Packaging, Description of Articles, Special Marks and
            Exceptions{" "}
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "10%",
            }}
          >
            Code
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "10%",
            }}
          >
            Weight Subject to Correction
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "10%",
            }}
          >
            Rate
          </Text>
          <Text
            style={{
              ...styles.tableColHeader,
              width: "10%",
            }}
          >
            Charges
          </Text>
        </View>

        {/* Table Rows with Alternating Colors */}
        {[...Array(10).keys()].map((rowIndex) => {
          const isOdd = rowIndex % 2 === 0;

          const customStyles = {
            ...styles.tableCol,
            backgroundColor: isOdd ? "#ffffff" : "#e0e0e0",
            minHeight: "25px",
          };
          return (
            <View style={{ ...styles.tableRow }} key={rowIndex}>
              <Text
                style={{
                  ...customStyles,
                  width: "10%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "5%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "55%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "10%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "10%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "10%",
                  textAlign: "center",
                }}
              ></Text>
              <Text
                style={{
                  ...customStyles,
                  width: "10%",
                  textAlign: "center",
                }}
              ></Text>
            </View>
          );
        })}
      </View>

      {/* Payment Section */}
      <View style={styles.boxed}>
        <Text style={styles.boxedTitle}>Payment Information</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.fieldLabel}>Payment Terms:</Text>

            <Text style={styles.fieldContent}>□ Prepaid □ Collect</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.fieldLabel}>
              C.O.D. Amount:
              <Text style={styles.fieldContent}>
                __________________________
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Signatures Section */}
      <View style={styles.signature}>
        <Text>Signature of Shipper: __________________________</Text>
        <Text>Signature of Carrier: __________________________</Text>
      </View>

      {/* Terms and Conditions Section */}
      <View style={{ marginTop: 20 }}>
        <Text style={styles.sectionTitle}>Terms and Conditions</Text>
        <Text style={styles.text}>
          Received, subject to classifications and tariffs in effect on the date
          of issue... [full terms and conditions text here as required]
        </Text>
      </View>
    </Page>
  </Document>
);

export default BillOfLadingPDF;
