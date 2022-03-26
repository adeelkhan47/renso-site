const API_DELAY = 500;

function fakeApiCall(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data
      });
    }, API_DELAY);
  });
}

function getBookingWidgets() {
  return fakeApiCall({
    total_rows: 1,
    objects: [
      {
        id: 1,
        day_picker_status: true,
        time_picker_status: true,
        date_range_picker_status: true,
        apply_vouchers_status: true,
        apply_months_factor_status: true,
        apply_location_factor_status: false
      }
    ]
  });
}

function getPageBooking() {
  return fakeApiCall({
    total_rows: 44,
    objects: [
      {
        id: 44,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T08:00:00",
        end_time: "2022-02-04T10:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 85,
          name: "towel 13",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Towel Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          },
          item_subtype: {
            id: 7,
            price: 5,
            name: "Extras Subtype Towel-updated",
            person: 1,
            item_type: {
              id: 3,
              name: "Extra",
              maintenance: 0,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 43,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-04T08:00:00",
        end_time: "2022-02-06T10:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 83,
          name: "towel 11",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Towel Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          },
          item_subtype: {
            id: 7,
            price: 5,
            name: "Extras Subtype Towel-updated",
            person: 1,
            item_type: {
              id: 3,
              name: "Extra",
              maintenance: 0,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 42,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-02T02:00:00",
        end_time: "2022-02-03T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 78,
          name: "towel 6",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Towel Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          },
          item_subtype: {
            id: 7,
            price: 5,
            name: "Extras Subtype Towel-updated",
            person: 1,
            item_type: {
              id: 3,
              name: "Extra",
              maintenance: 0,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 41,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T02:00:00",
        end_time: "2022-02-01T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 75,
          name: "towel 3",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Towel Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          },
          item_subtype: {
            id: 7,
            price: 5,
            name: "Extras Subtype Towel-updated",
            person: 1,
            item_type: {
              id: 3,
              name: "Extra",
              maintenance: 0,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 40,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-05T02:00:00",
        end_time: "2022-02-06T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 70,
          name: "Helmet 10",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Helmet Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          },
          item_subtype: {
            id: 6,
            price: 5,
            name: "Extras Subtype Helmet",
            person: 1,
            item_type: {
              id: 3,
              name: "Extra",
              maintenance: 0,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 39,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T02:00:00",
        end_time: "2022-02-03T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 70,
          name: "Helmet 10",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Helmet Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          },
          item_subtype: {
            id: 6,
            price: 5,
            name: "Extras Subtype Helmet",
            person: 1,
            item_type: {
              id: 3,
              name: "Extra",
              maintenance: 0,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 38,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T15:00:00",
        end_time: "2022-02-03T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 65,
          name: "Helmet 5",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Helmet Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          },
          item_subtype: {
            id: 6,
            price: 5,
            name: "Extras Subtype Helmet",
            person: 1,
            item_type: {
              id: 3,
              name: "Extra",
              maintenance: 0,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 37,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T15:00:00",
        end_time: "2022-02-02T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 60,
          name: "Helmet 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Helmet Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          },
          item_subtype: {
            id: 6,
            price: 5,
            name: "Extras Subtype Helmet",
            person: 1,
            item_type: {
              id: 3,
              name: "Extra",
              maintenance: 0,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 36,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-09T15:00:00",
        end_time: "2022-02-10T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 55,
          name: "Bike2 8",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Bike Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 5,
            price: 20,
            name: "Bike Sub Type 2",
            person: 2,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            },
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 35,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-04T15:00:00",
        end_time: "2022-02-05T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 55,
          name: "Bike2 8",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Bike Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 5,
            price: 20,
            name: "Bike Sub Type 2",
            person: 2,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            },
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 34,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T15:00:00",
        end_time: "2022-02-03T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 55,
          name: "Bike2 8",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Bike Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 5,
            price: 20,
            name: "Bike Sub Type 2",
            person: 2,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            },
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 33,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-02T05:00:00",
        end_time: "2022-02-03T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 51,
          name: "Bike2 4",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Bike Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 5,
            price: 20,
            name: "Bike Sub Type 2",
            person: 2,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            },
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 32,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-03T05:00:00",
        end_time: "2022-02-04T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 50,
          name: "Bike2 3",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Bike Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 5,
            price: 20,
            name: "Bike Sub Type 2",
            person: 2,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            },
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 31,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-03T05:00:00",
        end_time: "2022-02-04T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 48,
          name: "Bike2 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Bike Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 5,
            price: 20,
            name: "Bike Sub Type 2",
            person: 2,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            },
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 30,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T01:00:00",
        end_time: "2022-02-03T02:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 48,
          name: "Bike2 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Bike Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 5,
            price: 20,
            name: "Bike Sub Type 2",
            person: 2,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            },
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 29,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-02T01:00:00",
        end_time: "2022-02-03T02:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 45,
          name: "Bike1 9",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Bike Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 4,
            price: 10,
            name: "Bike Sub Type 1",
            person: 1,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            },
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 28,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-02T08:00:00",
        end_time: "2022-02-03T23:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 44,
          name: "Bike1 8",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Bike Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 4,
            price: 10,
            name: "Bike Sub Type 1",
            person: 1,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            },
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 27,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T19:00:00",
        end_time: "2022-02-01T23:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 40,
          name: "Bike 14",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 5,
            price: 20,
            name: "Bike Sub Type 2",
            person: 2,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 26,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-12T19:00:00",
        end_time: "2022-02-13T23:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 40,
          name: "Bike 14",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 5,
            price: 20,
            name: "Bike Sub Type 2",
            person: 2,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 25,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-10T19:00:00",
        end_time: "2022-02-12T23:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 36,
          name: "Bike 11",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 5,
            price: 20,
            name: "Bike Sub Type 2",
            person: 2,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 24,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-10T19:00:00",
        end_time: "2022-02-12T23:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 32,
          name: "Bike 7",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 4,
            price: 10,
            name: "Bike Sub Type 1",
            person: 1,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 23,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-08T19:00:00",
        end_time: "2022-02-09T23:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 32,
          name: "Bike 7",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 4,
            price: 10,
            name: "Bike Sub Type 1",
            person: 1,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 22,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-06T14:00:00",
        end_time: "2022-02-07T15:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 30,
          name: "Bike 5",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 4,
            price: 10,
            name: "Bike Sub Type 1",
            person: 1,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 21,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-06T14:00:00",
        end_time: "2022-02-06T15:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 26,
          name: "Bike 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 4,
            price: 10,
            name: "Bike Sub Type 1",
            person: 1,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 20,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-05T14:00:00",
        end_time: "2022-02-05T15:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 26,
          name: "Bike 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 4,
            price: 10,
            name: "Bike Sub Type 1",
            person: 1,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 19,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-03T14:00:00",
        end_time: "2022-02-03T15:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 26,
          name: "Bike 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 4,
            price: 10,
            name: "Bike Sub Type 1",
            person: 1,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 18,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-02T11:00:00",
        end_time: "2022-02-02T15:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 26,
          name: "Bike 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 4,
            price: 10,
            name: "Bike Sub Type 1",
            person: 1,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 17,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-02T22:00:00",
        end_time: "2022-02-02T23:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 26,
          name: "Bike 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          },
          item_subtype: {
            id: 4,
            price: 10,
            name: "Bike Sub Type 1",
            person: 1,
            item_type: {
              id: 2,
              name: "Bike",
              maintenance: 1,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 16,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T22:00:00",
        end_time: "2022-02-01T23:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 23,
          name: "Boat3 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat3 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 3,
            price: 50,
            name: "Boat SubType 3",
            person: 6,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 1,
                name: "Cheap",
                description: "Cheap Description",
                color: "yellow"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 15,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T19:00:00",
        end_time: "2022-02-01T23:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 18,
          name: "Boat2 2",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat2 Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 2,
            price: 35,
            name: "Boat SubType 2",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [
            {
              tag: {
                id: 2,
                name: "Expensive",
                description: "Expensive Description",
                color: "Blue"
              }
            }
          ],
          item_locations: []
        }
      },
      {
        id: 14,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T14:00:00",
        end_time: "2022-02-01T19:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 14,
          name: "Boat 10",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 2,
            name: "Expired",
            color: "red"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 13,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T05:00:00",
        end_time: "2022-02-01T13:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 13,
          name: "Boat 9",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 2,
            name: "Expired",
            color: "red"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 12,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T04:00:00",
        end_time: "2022-02-01T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 12,
          name: "Boat 9",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 11,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T04:00:00",
        end_time: "2022-02-01T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 10,
          name: "Boat 7",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 10,
        discount: 0,
        location: "Berlin",
        start_time: "2022-02-01T00:00:00",
        end_time: "2022-02-01T02:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 10,
          name: "Boat 7",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 9,
        discount: 0,
        location: "Berlin",
        start_time: "2022-01-30T15:00:00",
        end_time: "2022-01-30T18:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 5,
          name: "Boat 2",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 8,
        discount: 0,
        location: "Berlin",
        start_time: "2022-01-30T15:00:00",
        end_time: "2022-01-30T18:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 4,
          name: "Boat 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 7,
        discount: 0,
        location: "Berlin",
        start_time: "2022-01-30T15:00:00",
        end_time: "2022-01-30T18:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 6,
          name: "Boat 3",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 6,
        discount: 0,
        location: "Berlin",
        start_time: "2022-01-30T15:00:00",
        end_time: "2022-01-30T18:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 7,
          name: "Boat 4",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 5,
        discount: 0,
        location: "Berlin",
        start_time: "2022-01-29T12:00:00",
        end_time: "2022-01-29T14:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 6,
          name: "Boat 3",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 4,
        discount: 0,
        location: "Berlin",
        start_time: "2022-01-29T02:00:00",
        end_time: "2022-01-29T09:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 6,
          name: "Boat 3",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 3,
        discount: 0,
        location: "Berlin",
        start_time: "2022-01-28T03:00:00",
        end_time: "2022-01-28T04:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 5,
          name: "Boat 2",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 2,
        discount: 0,
        location: "Berlin",
        start_time: "2022-01-28T03:00:00",
        end_time: "2022-01-28T04:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 4,
          name: "Boat 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      },
      {
        id: 1,
        discount: 0,
        location: "Berlin",
        start_time: "2022-01-28T00:00:00",
        end_time: "2022-01-28T02:00:00",
        booking_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        item: {
          id: 4,
          name: "Boat 1",
          image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
          description: "Boat Description",
          item_status: {
            id: 1,
            name: "Available",
            color: "green"
          },
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          },
          item_subtype: {
            id: 1,
            price: 30,
            name: "Boat SubType 1",
            person: 5,
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          },
          item_tags: [],
          item_locations: []
        }
      }
    ],
    error: null
  });
}

function getCustomParameters() {
  return fakeApiCall({
    total_rows: 2,
    objects: [
      {
        id: 2,
        name: "Address"
      },
      {
        id: 1,
        name: "Zipcode"
      }
    ]
  });
}

function getDayPickerList() {
  return fakeApiCall({
    total_rows: 8,
    objects: [
      {
        id: 10,
        monday: true,
        tuesday: true,
        wednesday: false,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 10,
          price: 10,
          name: "Food",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        }
      },
      {
        id: 7,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        }
      },
      {
        id: 6,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        }
      },
      {
        id: 5,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        }
      },
      {
        id: 4,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        }
      },
      {
        id: 3,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 3,
          price: 50,
          name: "Boat SubType 3",
          person: 6,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        }
      },
      {
        id: 2,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 2,
          price: 35,
          name: "Boat SubType 2",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        }
      },
      {
        id: 1,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true,
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        }
      }
    ]
  });
}

function updatePicker(pickerId, body) {
  return fakeApiCall({
    id: pickerId,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    item_type: {
      id: 5,
      name: "Home",
      maintenance: 24,
      delivery_available: false
    },
    ...body
  });
}

function getItemStatusList() {
  return fakeApiCall({
    total_rows: 4,
    objects: [
      {
        id: 4,
        name: "Maintenance",
        color: "orange"
      },
      {
        id: 3,
        name: "Booked",
        color: "blue"
      },
      {
        id: 2,
        name: "Expired",
        color: "red"
      },
      {
        id: 1,
        name: "Available",
        color: "green"
      }
    ]
  });
}

function getItemSubtypes() {
  return fakeApiCall({
    total_rows: 8,
    objects: [
      {
        id: 10,
        price: 10,
        name: "Food",
        person: 1,
        image:
          "https://cdn.pakistanistores.com/data/bjorn/thumbs/fff9b5c28dfe7ca07fd9c5e2b8e9eb7f.jpg",
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        }
      },
      {
        id: 7,
        price: 5,
        name: "Extras Subtype Towel-updated",
        person: 1,
        image:
          "https://cdn.pakistanistores.com/data/bjorn/thumbs/fff9b5c28dfe7ca07fd9c5e2b8e9eb7f.jpg",
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        }
      },
      {
        id: 6,
        price: 5,
        name: "Extras Subtype Helmet",
        person: 1,
        image:
          "https://cdn.pakistanistores.com/data/bjorn/thumbs/fff9b5c28dfe7ca07fd9c5e2b8e9eb7f.jpg",
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        }
      },
      {
        id: 5,
        price: 20,
        name: "Bike Sub Type 2",
        person: 2,
        image:
          "https://cdn.pakistanistores.com/data/bjorn/thumbs/fff9b5c28dfe7ca07fd9c5e2b8e9eb7f.jpg",
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        }
      },
      {
        id: 4,
        price: 10,
        name: "Bike Sub Type 1",
        person: 1,
        image:
          "https://cdn.pakistanistores.com/data/bjorn/thumbs/fff9b5c28dfe7ca07fd9c5e2b8e9eb7f.jpg",
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        }
      },
      {
        id: 3,
        price: 50,
        name: "Boat SubType 3",
        person: 6,
        image:
          "https://cdn.pakistanistores.com/data/bjorn/thumbs/fff9b5c28dfe7ca07fd9c5e2b8e9eb7f.jpg",
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        }
      },
      {
        id: 2,
        price: 35,
        name: "Boat SubType 2",
        person: 5,
        image:
          "https://cdn.pakistanistores.com/data/bjorn/thumbs/fff9b5c28dfe7ca07fd9c5e2b8e9eb7f.jpg",
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        }
      },
      {
        id: 1,
        price: 30,
        name: "Boat SubType 1",
        person: 5,
        image:
          "https://cdn.pakistanistores.com/data/bjorn/thumbs/fff9b5c28dfe7ca07fd9c5e2b8e9eb7f.jpg",
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        }
      }
    ]
  });
}

function getItemTypes() {
  return fakeApiCall({
    total_rows: 2,
    objects: [
      {
        id: 2,
        name: "Bike",
        maintenance: 1,
        delivery_available: true
      },
      {
        id: 1,
        name: "Boat",
        maintenance: 2,
        delivery_available: true
      }
    ]
  });
}

function getPageItems() {
  return fakeApiCall({
    total_rows: 86,
    objects: [
      {
        id: 86,
        name: "slkdfjl",
        image: "klsdjfklgj",
        description: "sdjlfgkj",
        item_status: {
          id: 3,
          name: "Booked",
          color: "blue"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: [
          {
            location: {
              id: 2,
              name: "loc-02",
              description: "Dummy Location 02",
              price_factor: 23
            }
          },
          {
            location: {
              id: 1,
              name: "NewParic",
              description: "stringLol",
              price_factor: 120
            }
          }
        ]
      },
      {
        id: 89,
        name: "string",
        image: "string",
        description: "string",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: [
          {
            location: {
              id: 1,
              name: "NewParic",
              description: "stringLol",
              price_factor: 120
            }
          },
          {
            location: {
              id: 2,
              name: "loc-02",
              description: "Dummy Location 02",
              price_factor: 23
            }
          }
        ]
      },
      {
        id: 88,
        name: "string",
        image: "string",
        description: "string",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 87,
        name: "string",
        image: "string",
        description: "string",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 71,
        name: "Helmet 11",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 72,
        name: "Helmet 12",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 85,
        name: "towel 13",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 84,
        name: "towel 12",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 83,
        name: "towel 11",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 82,
        name: "towel 10",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 81,
        name: "towel 9",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 80,
        name: "towel 8",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 79,
        name: "towel 7",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 78,
        name: "towel 6",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 77,
        name: "towel 5",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 76,
        name: "towel 4",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 75,
        name: "towel 3",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 74,
        name: "towel 2",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 73,
        name: "towel 1",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Towel Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 7,
          price: 5,
          name: "Extras Subtype Towel-updated",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 70,
        name: "Helmet 10",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 69,
        name: "Helmet 9",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 68,
        name: "Helmet 8",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 67,
        name: "Helmet 7",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 66,
        name: "Helmet 6",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 65,
        name: "Helmet 5",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 64,
        name: "Helmet 4",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 63,
        name: "Helmet 3",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 62,
        name: "Helmet 3",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 61,
        name: "Helmet 2",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 60,
        name: "Helmet 1",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Helmet Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 3,
          name: "Extra",
          maintenance: 0,
          delivery_available: true
        },
        item_subtype: {
          id: 6,
          price: 5,
          name: "Extras Subtype Helmet",
          person: 1,
          item_type: {
            id: 3,
            name: "Extra",
            maintenance: 0,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 59,
        name: "Bike2 12",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 58,
        name: "Bike2 11",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 57,
        name: "Bike2 10",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 56,
        name: "Bike2 9",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 55,
        name: "Bike2 8",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 54,
        name: "Bike2 7",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 53,
        name: "Bike2 6",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 52,
        name: "Bike2 5",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 51,
        name: "Bike2 4",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 50,
        name: "Bike2 3",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 49,
        name: "Bike2 2",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 48,
        name: "Bike2 1",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 47,
        name: "Bike1 11",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 46,
        name: "Bike1 10",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 45,
        name: "Bike1 9",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 44,
        name: "Bike1 8",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 43,
        name: "Bike1  7",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 42,
        name: "Bike1  6",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Bike Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 41,
        name: "Bike 15",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 40,
        name: "Bike 14",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 39,
        name: "Bike 13",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 38,
        name: "Bike 12",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 37,
        name: "Bike 12",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 36,
        name: "Bike 11",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 35,
        name: "Bike 10",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 5,
          price: 20,
          name: "Bike Sub Type 2",
          person: 2,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 34,
        name: "Bike 9",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 33,
        name: "Bike 8",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 32,
        name: "Bike 7",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 31,
        name: "Bike 6",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 30,
        name: "Bike 5",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 29,
        name: "Bike 4",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 28,
        name: "Bike 3",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 27,
        name: "Bike 2",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 26,
        name: "Bike 1",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 2,
          name: "Bike",
          maintenance: 1,
          delivery_available: true
        },
        item_subtype: {
          id: 4,
          price: 10,
          name: "Bike Sub Type 1",
          person: 1,
          item_type: {
            id: 2,
            name: "Bike",
            maintenance: 1,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 25,
        name: "Boat3 3",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 3,
          price: 50,
          name: "Boat SubType 3",
          person: 6,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 24,
        name: "Boat3 2",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 3,
          price: 50,
          name: "Boat SubType 3",
          person: 6,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 23,
        name: "Boat3 1",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat3 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 3,
          price: 50,
          name: "Boat SubType 3",
          person: 6,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 22,
        name: "Boat2 6",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat2 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 2,
          price: 35,
          name: "Boat SubType 2",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 21,
        name: "Boat2 5",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat2 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 2,
          price: 35,
          name: "Boat SubType 2",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 20,
        name: "Boat2 4",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat2 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 2,
          price: 35,
          name: "Boat SubType 2",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 19,
        name: "Boat2 3",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat2 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 2,
          price: 35,
          name: "Boat SubType 2",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 18,
        name: "Boat2 2",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat2 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 2,
          price: 35,
          name: "Boat SubType 2",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 17,
        name: "Boat2 1",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat2 Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 2,
          price: 35,
          name: "Boat SubType 2",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 16,
        name: "Boat 12",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 2,
          name: "Expired",
          color: "red"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          },
          {
            tag: {
              id: 2,
              name: "Expensive",
              description: "Expensive Description",
              color: "Blue"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 15,
        name: "Boat 11",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 2,
          name: "Expired",
          color: "red"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [
          {
            tag: {
              id: 1,
              name: "Cheap",
              description: "Cheap Description",
              color: "yellow"
            }
          }
        ],
        item_locations: []
      },
      {
        id: 14,
        name: "Boat 10",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 2,
          name: "Expired",
          color: "red"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [],
        item_locations: []
      },
      {
        id: 13,
        name: "Boat 9",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 2,
          name: "Expired",
          color: "red"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [],
        item_locations: []
      },
      {
        id: 12,
        name: "Boat 9",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [],
        item_locations: []
      },
      {
        id: 11,
        name: "Boat 8",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [],
        item_locations: []
      },
      {
        id: 10,
        name: "Boat 7",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [],
        item_locations: []
      },
      {
        id: 9,
        name: "Boat 6",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [],
        item_locations: []
      },
      {
        id: 8,
        name: "Boat 5",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [],
        item_locations: []
      },
      {
        id: 7,
        name: "Boat 4",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [],
        item_locations: []
      },
      {
        id: 6,
        name: "Boat 3",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [],
        item_locations: []
      },
      {
        id: 5,
        name: "Boat 2",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [],
        item_locations: []
      },
      {
        id: 4,
        name: "Boat 1",
        image: "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
        description: "Boat Description",
        item_status: {
          id: 1,
          name: "Available",
          color: "green"
        },
        item_type: {
          id: 1,
          name: "Boat",
          maintenance: 2,
          delivery_available: true
        },
        item_subtype: {
          id: 1,
          price: 30,
          name: "Boat SubType 1",
          person: 5,
          item_type: {
            id: 1,
            name: "Boat",
            maintenance: 2,
            delivery_available: true
          }
        },
        item_tags: [],
        item_locations: []
      }
    ]
  });
}

function getAllLanguages() {
  return fakeApiCall({
    total_rows: 25,
    objects: [
      {
        id: 27,
        name: "OOOOOOOO200",
        status: true
      },
      {
        id: 26,
        name: "OOOOOOOO19",
        status: true
      },
      {
        id: 25,
        name: "OOOOOOOO18",
        status: true
      },
      {
        id: 24,
        name: "OOOOOOOO17",
        status: true
      },
      {
        id: 23,
        name: "OOOOOOOO16",
        status: true
      },
      {
        id: 22,
        name: "OOOOOOOO15",
        status: true
      },
      {
        id: 21,
        name: "OOOOOOOO14",
        status: true
      },
      {
        id: 20,
        name: "OOOOOOOO13",
        status: true
      },
      {
        id: 19,
        name: "OOOOOOOO12",
        status: true
      },
      {
        id: 18,
        name: "OOOOOOOO11",
        status: true
      },
      {
        id: 17,
        name: "OOOOOOOO10",
        status: true
      },
      {
        id: 16,
        name: "OOOOOOOO9",
        status: true
      },
      {
        id: 15,
        name: "OOOOOOOO8",
        status: true
      },
      {
        id: 14,
        name: "OOOOOOOO7",
        status: true
      },
      {
        id: 13,
        name: "OOOOOOOO6",
        status: true
      },
      {
        id: 12,
        name: "OOOOOOOO5",
        status: true
      },
      {
        id: 11,
        name: "OOOOOOOO4",
        status: true
      },
      {
        id: 10,
        name: "OOOOOOOO3",
        status: true
      },
      {
        id: 9,
        name: "OOOOOOOO2",
        status: true
      },
      {
        id: 8,
        name: "OOOOOOOO1",
        status: true
      },
      {
        id: 7,
        name: "form",
        status: true
      },
      {
        id: 4,
        name: "Italian",
        status: true
      },
      {
        id: 3,
        name: "German",
        status: true
      },
      {
        id: 2,
        name: "French",
        status: true
      },
      {
        id: 1,
        name: "English",
        status: true
      }
    ]
  });
}

function getOrderStatusList() {
  return fakeApiCall({
    total_rows: 3,
    objects: [
      {
        id: 3,
        name: "Cancelled",
        color: "red"
      },
      {
        id: 2,
        name: "Completed",
        color: "blue"
      },
      {
        id: 1,
        name: "Active",
        color: "green"
      }
    ]
  });
}

function getPageOrders() {
  return fakeApiCall({
    total_rows: 37,
    objects: [
      {
        id: 37,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 405,
        order_bookings: [
          {
            booking: {
              id: 42,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T02:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 78,
                name: "towel 6",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 43,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-04T08:00:00",
              end_time: "2022-02-06T10:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 83,
                name: "towel 11",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 37,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 36,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 370,
        order_bookings: [
          {
            booking: {
              id: 44,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T08:00:00",
              end_time: "2022-02-04T10:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 85,
                name: "towel 13",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 36,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 35,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 620,
        order_bookings: [
          {
            booking: {
              id: 44,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T08:00:00",
              end_time: "2022-02-04T10:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 85,
                name: "towel 13",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 43,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-04T08:00:00",
              end_time: "2022-02-06T10:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 83,
                name: "towel 11",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 35,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 34,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 35,
        order_bookings: [
          {
            booking: {
              id: 41,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T02:00:00",
              end_time: "2022-02-01T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 75,
                name: "towel 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 34,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 33,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 345,
        order_bookings: [
          {
            booking: {
              id: 41,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T02:00:00",
              end_time: "2022-02-01T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 75,
                name: "towel 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 40,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-05T02:00:00",
              end_time: "2022-02-06T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 70,
                name: "Helmet 10",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 42,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T02:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 78,
                name: "towel 6",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 33,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 32,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 60,
        order_bookings: [
          {
            booking: {
              id: 5,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-29T12:00:00",
              end_time: "2022-01-29T14:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 6,
                name: "Boat 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 32,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 31,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 155,
        order_bookings: [
          {
            booking: {
              id: 40,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-05T02:00:00",
              end_time: "2022-02-06T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 70,
                name: "Helmet 10",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 31,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 30,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 275,
        order_bookings: [
          {
            booking: {
              id: 39,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T02:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 70,
                name: "Helmet 10",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 30,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 29,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 90,
        order_bookings: [
          {
            booking: {
              id: 37,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T15:00:00",
              end_time: "2022-02-02T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 60,
                name: "Helmet 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 29,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 28,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 730,
        order_bookings: [
          {
            booking: {
              id: 37,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T15:00:00",
              end_time: "2022-02-02T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 60,
                name: "Helmet 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 38,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T15:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 65,
                name: "Helmet 5",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 39,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T02:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 70,
                name: "Helmet 10",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 40,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-05T02:00:00",
              end_time: "2022-02-06T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 70,
                name: "Helmet 10",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 28,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 27,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 660,
        order_bookings: [
          {
            booking: {
              id: 36,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-09T15:00:00",
              end_time: "2022-02-10T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 55,
                name: "Bike2 8",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 37,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T15:00:00",
              end_time: "2022-02-02T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 60,
                name: "Helmet 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 38,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T15:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 65,
                name: "Helmet 5",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 27,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 26,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 1560,
        order_bookings: [
          {
            booking: {
              id: 34,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T15:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 55,
                name: "Bike2 8",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 35,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-04T15:00:00",
              end_time: "2022-02-05T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 55,
                name: "Bike2 8",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 36,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-09T15:00:00",
              end_time: "2022-02-10T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 55,
                name: "Bike2 8",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 26,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 25,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 1675,
        order_bookings: [
          {
            booking: {
              id: 32,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-03T05:00:00",
              end_time: "2022-02-04T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 50,
                name: "Bike2 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 34,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T15:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 55,
                name: "Bike2 8",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 39,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T02:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 70,
                name: "Helmet 10",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 25,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 24,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 1695,
        order_bookings: [
          {
            booking: {
              id: 30,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T01:00:00",
              end_time: "2022-02-03T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 48,
                name: "Bike2 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 31,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-03T05:00:00",
              end_time: "2022-02-04T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 48,
                name: "Bike2 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 40,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-05T02:00:00",
              end_time: "2022-02-06T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 70,
                name: "Helmet 10",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Helmet Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 6,
                  price: 5,
                  name: "Extras Subtype Helmet",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 24,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 23,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 775,
        order_bookings: [
          {
            booking: {
              id: 29,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T01:00:00",
              end_time: "2022-02-03T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 45,
                name: "Bike1 9",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 4,
                  price: 10,
                  name: "Bike Sub Type 1",
                  person: 1,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 42,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T02:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 78,
                name: "towel 6",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 44,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T08:00:00",
              end_time: "2022-02-04T10:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 85,
                name: "towel 13",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 23,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 22,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 1990,
        order_bookings: [
          {
            booking: {
              id: 28,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T08:00:00",
              end_time: "2022-02-03T23:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 44,
                name: "Bike1 8",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 4,
                  price: 10,
                  name: "Bike Sub Type 1",
                  person: 1,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 29,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T01:00:00",
              end_time: "2022-02-03T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 45,
                name: "Bike1 9",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 4,
                  price: 10,
                  name: "Bike Sub Type 1",
                  person: 1,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 30,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T01:00:00",
              end_time: "2022-02-03T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 48,
                name: "Bike2 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 44,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T08:00:00",
              end_time: "2022-02-04T10:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 85,
                name: "towel 13",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 22,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 21,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 1410,
        order_bookings: [
          {
            booking: {
              id: 24,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-10T19:00:00",
              end_time: "2022-02-12T23:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 32,
                name: "Bike 7",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat3 Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 4,
                  price: 10,
                  name: "Bike Sub Type 1",
                  person: 1,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 26,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-12T19:00:00",
              end_time: "2022-02-13T23:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 40,
                name: "Bike 14",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat3 Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 27,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T19:00:00",
              end_time: "2022-02-01T23:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 40,
                name: "Bike 14",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat3 Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 29,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T01:00:00",
              end_time: "2022-02-03T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 45,
                name: "Bike1 9",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 4,
                  price: 10,
                  name: "Bike Sub Type 1",
                  person: 1,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 21,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 20,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 780,
        order_bookings: [
          {
            booking: {
              id: 22,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-06T14:00:00",
              end_time: "2022-02-07T15:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 30,
                name: "Bike 5",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat3 Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 4,
                  price: 10,
                  name: "Bike Sub Type 1",
                  person: 1,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 23,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-08T19:00:00",
              end_time: "2022-02-09T23:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 32,
                name: "Bike 7",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat3 Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 4,
                  price: 10,
                  name: "Bike Sub Type 1",
                  person: 1,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 29,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T01:00:00",
              end_time: "2022-02-03T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 45,
                name: "Bike1 9",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 4,
                  price: 10,
                  name: "Bike Sub Type 1",
                  person: 1,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 20,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 19,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 60,
        order_bookings: [
          {
            booking: {
              id: 1,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-28T00:00:00",
              end_time: "2022-01-28T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 4,
                name: "Boat 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 19,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 18,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 1460,
        order_bookings: [
          {
            booking: {
              id: 16,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T22:00:00",
              end_time: "2022-02-01T23:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 23,
                name: "Boat3 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat3 Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 3,
                  price: 50,
                  name: "Boat SubType 3",
                  person: 6,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 18,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T11:00:00",
              end_time: "2022-02-02T15:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 26,
                name: "Bike 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat3 Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 4,
                  price: 10,
                  name: "Bike Sub Type 1",
                  person: 1,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 28,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T08:00:00",
              end_time: "2022-02-03T23:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 44,
                name: "Bike1 8",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 4,
                  price: 10,
                  name: "Bike Sub Type 1",
                  person: 1,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 30,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T01:00:00",
              end_time: "2022-02-03T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 48,
                name: "Bike2 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 5,
                  price: 20,
                  name: "Bike Sub Type 2",
                  person: 2,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 18,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 17,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 260,
        order_bookings: [
          {
            booking: {
              id: 14,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T14:00:00",
              end_time: "2022-02-01T19:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 14,
                name: "Boat 10",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 2,
                  name: "Expired",
                  color: "red"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 5,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-29T12:00:00",
              end_time: "2022-01-29T14:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 6,
                name: "Boat 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 16,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T22:00:00",
              end_time: "2022-02-01T23:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 23,
                name: "Boat3 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat3 Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 3,
                  price: 50,
                  name: "Boat SubType 3",
                  person: 6,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 17,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 16,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 540,
        order_bookings: [
          {
            booking: {
              id: 12,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T04:00:00",
              end_time: "2022-02-01T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 12,
                name: "Boat 9",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 13,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T05:00:00",
              end_time: "2022-02-01T13:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 13,
                name: "Boat 9",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 2,
                  name: "Expired",
                  color: "red"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 14,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T14:00:00",
              end_time: "2022-02-01T19:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 14,
                name: "Boat 10",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 2,
                  name: "Expired",
                  color: "red"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 16,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 15,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 390,
        order_bookings: [
          {
            booking: {
              id: 12,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T04:00:00",
              end_time: "2022-02-01T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 12,
                name: "Boat 9",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 13,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T05:00:00",
              end_time: "2022-02-01T13:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 13,
                name: "Boat 9",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 2,
                  name: "Expired",
                  color: "red"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 15,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 14,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 545,
        order_bookings: [
          {
            booking: {
              id: 12,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T04:00:00",
              end_time: "2022-02-01T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 12,
                name: "Boat 9",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 13,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T05:00:00",
              end_time: "2022-02-01T13:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 13,
                name: "Boat 9",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 2,
                  name: "Expired",
                  color: "red"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 42,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T02:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 78,
                name: "towel 6",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 14,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 13,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 785,
        order_bookings: [
          {
            booking: {
              id: 8,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 4,
                name: "Boat 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 9,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 5,
                name: "Boat 2",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 10,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T00:00:00",
              end_time: "2022-02-01T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 10,
                name: "Boat 7",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 28,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T08:00:00",
              end_time: "2022-02-03T23:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 44,
                name: "Bike1 8",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Bike Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 2,
                  name: "Bike",
                  maintenance: 1,
                  delivery_available: true
                },
                item_subtype: {
                  id: 4,
                  price: 10,
                  name: "Bike Sub Type 1",
                  person: 1,
                  item_type: {
                    id: 2,
                    name: "Bike",
                    maintenance: 1,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  },
                  {
                    tag: {
                      id: 2,
                      name: "Expensive",
                      description: "Expensive Description",
                      color: "Blue"
                    }
                  }
                ],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 42,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T02:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 78,
                name: "towel 6",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 13,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 12,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 240,
        order_bookings: [
          {
            booking: {
              id: 8,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 4,
                name: "Boat 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 9,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 5,
                name: "Boat 2",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 10,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T00:00:00",
              end_time: "2022-02-01T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 10,
                name: "Boat 7",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 12,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 11,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 180,
        order_bookings: [
          {
            booking: {
              id: 7,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 6,
                name: "Boat 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 8,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 4,
                name: "Boat 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 11,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 10,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 270,
        order_bookings: [
          {
            booking: {
              id: 6,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 7,
                name: "Boat 4",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 7,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 6,
                name: "Boat 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 8,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 4,
                name: "Boat 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 10,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 9,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 215,
        order_bookings: [
          {
            booking: {
              id: 6,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 7,
                name: "Boat 4",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 7,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 6,
                name: "Boat 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 41,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-01T02:00:00",
              end_time: "2022-02-01T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 75,
                name: "towel 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 9,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 8,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 335,
        order_bookings: [
          {
            booking: {
              id: 6,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 7,
                name: "Boat 4",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 7,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 6,
                name: "Boat 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 42,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T02:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 78,
                name: "towel 6",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 8,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 7,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 245,
        order_bookings: [
          {
            booking: {
              id: 6,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-30T15:00:00",
              end_time: "2022-01-30T18:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 7,
                name: "Boat 4",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 42,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T02:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 78,
                name: "towel 6",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 7,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 6,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 215,
        order_bookings: [
          {
            booking: {
              id: 5,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-29T12:00:00",
              end_time: "2022-01-29T14:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 6,
                name: "Boat 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 42,
              discount: 0,
              location: "Berlin",
              start_time: "2022-02-02T02:00:00",
              end_time: "2022-02-03T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 78,
                name: "towel 6",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Towel Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 3,
                  name: "Extra",
                  maintenance: 0,
                  delivery_available: true
                },
                item_subtype: {
                  id: 7,
                  price: 5,
                  name: "Extras Subtype Towel-updated",
                  person: 1,
                  item_type: {
                    id: 3,
                    name: "Extra",
                    maintenance: 0,
                    delivery_available: true
                  }
                },
                item_tags: [
                  {
                    tag: {
                      id: 1,
                      name: "Cheap",
                      description: "Cheap Description",
                      color: "yellow"
                    }
                  }
                ],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 6,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 5,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 60,
        order_bookings: [
          {
            booking: {
              id: 5,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-29T12:00:00",
              end_time: "2022-01-29T14:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 6,
                name: "Boat 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 5,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 4,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 120,
        order_bookings: [
          {
            booking: {
              id: 3,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-28T03:00:00",
              end_time: "2022-01-28T04:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 5,
                name: "Boat 2",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 2,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-28T03:00:00",
              end_time: "2022-01-28T04:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 4,
                name: "Boat 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 5,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-29T12:00:00",
              end_time: "2022-01-29T14:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 6,
                name: "Boat 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 4,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 3,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 2,
          name: "Completed",
          color: "blue"
        },
        time_period: "UTC",
        total_cost: 30,
        order_bookings: [
          {
            booking: {
              id: 3,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-28T03:00:00",
              end_time: "2022-01-28T04:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 5,
                name: "Boat 2",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 3,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 2,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 90,
        order_bookings: [
          {
            booking: {
              id: 1,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-28T00:00:00",
              end_time: "2022-01-28T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 4,
                name: "Boat 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 3,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-28T03:00:00",
              end_time: "2022-01-28T04:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 5,
                name: "Boat 2",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 2,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      },
      {
        id: 1,
        client_name: "Client Name",
        client_email: "Clien@gmail.com",
        phone_number: "XXXX-XXXXXXX",
        order_status: {
          id: 1,
          name: "Active",
          color: "green"
        },
        time_period: "UTC",
        total_cost: 300,
        order_bookings: [
          {
            booking: {
              id: 1,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-28T00:00:00",
              end_time: "2022-01-28T02:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 4,
                name: "Boat 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 2,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-28T03:00:00",
              end_time: "2022-01-28T04:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 4,
                name: "Boat 1",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          },
          {
            booking: {
              id: 4,
              discount: 0,
              location: "Berlin",
              start_time: "2022-01-29T02:00:00",
              end_time: "2022-01-29T09:00:00",
              booking_status: {
                id: 1,
                name: "Active",
                color: "green"
              },
              item: {
                id: 6,
                name: "Boat 3",
                image:
                  "https://almoizrentacar.com/wp-content/uploads/2020/08/v8.jpg",
                description: "Boat Description",
                item_status: {
                  id: 1,
                  name: "Available",
                  color: "green"
                },
                item_type: {
                  id: 1,
                  name: "Boat",
                  maintenance: 2,
                  delivery_available: true
                },
                item_subtype: {
                  id: 1,
                  price: 30,
                  name: "Boat SubType 1",
                  person: 5,
                  item_type: {
                    id: 1,
                    name: "Boat",
                    maintenance: 2,
                    delivery_available: true
                  }
                },
                item_tags: [],
                item_locations: []
              }
            }
          }
        ],
        order_custom_data: [
          {
            custom_data: {
              id: 1,
              name: "Address",
              value: "Any Dummy Address."
            }
          }
        ]
      }
    ],
    error: null
  });
}

function getPaymentMethods() {
  return fakeApiCall({
    total_rows: 2,
    objects: [
      {
        id: 1,
        name: "Paypal",
        status: true,
        payment_tax: [
          {
            tax: {
              id: 1,
              name: "GST",
              percentage: 13,
              description: "GST"
            }
          },
          {
            tax: {
              id: 2,
              name: "ATP",
              percentage: 3,
              description: "ATP"
            }
          }
        ]
      },
      {
        id: 2,
        name: "Stripe",
        status: false,
        payment_tax: [
          {
            tax: {
              id: 1,
              name: "GST",
              percentage: 13,
              description: "GST"
            }
          },
          {
            tax: {
              id: 2,
              name: "ATP",
              percentage: 3,
              description: "ATP"
            }
          }
        ]
      }
    ]
  });
}

function getTags() {
  return fakeApiCall({
    total_rows: 2,
    objects: [
      {
        id: 2,
        name: "Expensive",
        description: "Expensive Description",
        color: "Blue"
      },
      {
        id: 1,
        name: "Cheap",
        description: "Cheap Description",
        color: "yellow"
      }
    ]
  });
}

function getTaxLists() {
  return fakeApiCall({
    total_rows: 2,
    objects: [
      {
        id: 2,
        name: "ATP",
        percentage: 3,
        description: "ATP"
      },
      {
        id: 1,
        name: "GST",
        percentage: 13,
        description: "GST"
      }
    ]
  });
}

function getTimePickers() {
  return fakeApiCall({
    total_rows: 12,
    objects: [
      {
        id: 13,
        start_time: "23:15:21",
        end_time: "22:17:21",
        day: "wednesday",
        day_picker_id: 10
      },
      {
        id: 12,
        start_time: "22:29:10",
        end_time: "16:29:10",
        day: "monday",
        day_picker_id: 7
      },
      {
        id: 11,
        start_time: "23:29:10",
        end_time: "22:31:10",
        day: "monday",
        day_picker_id: 7
      },
      {
        id: 10,
        start_time: "22:33:10",
        end_time: "22:33:10",
        day: "monday",
        day_picker_id: 7
      },
      {
        id: 9,
        start_time: "22:29:10",
        end_time: "22:34:10",
        day: "monday",
        day_picker_id: 7
      },
      {
        id: 8,
        start_time: "22:30:10",
        end_time: "22:32:10",
        day: "monday",
        day_picker_id: 7
      },
      {
        id: 7,
        start_time: "22:29:10",
        end_time: "22:31:10",
        day: "monday",
        day_picker_id: 7
      },
      {
        id: 6,
        start_time: "22:32:10",
        end_time: "23:29:10",
        day: "monday",
        day_picker_id: 7
      },
      {
        id: 4,
        start_time: "22:31:10",
        end_time: "22:32:10",
        day: "monday",
        day_picker_id: 7
      },
      {
        id: 3,
        start_time: "22:30:10",
        end_time: "22:30:10",
        day: "monday",
        day_picker_id: 7
      },
      {
        id: 2,
        start_time: "22:29:10",
        end_time: "23:29:10",
        day: "monday",
        day_picker_id: 7
      },
      {
        id: 1,
        start_time: "22:29:10",
        end_time: "22:29:10",
        day: "monday",
        day_picker_id: 7
      }
    ]
  });
}

function getAssociateEmails() {
  return fakeApiCall({
    total_rows: 12,
    objects: [
      {
        id: 11,
        email: "ksdjhf478",
        status: false
      },
      {
        id: 15,
        email: "sdklfh 34 4er g45g 445gw 3 454",
        status: true
      },
      {
        id: 14,
        email: "sdklfh89473ty4r8wh4ri7wya4irufgh478w4h4",
        status: true
      },
      {
        id: 13,
        email: "slkdfheioryf3",
        status: true
      },
      {
        id: 12,
        email: "sdklfjeoi486",
        status: true
      },
      {
        id: 10,
        email: "slkfeio6t8347",
        status: true
      },
      {
        id: 9,
        email: "34345",
        status: true
      },
      {
        id: 8,
        email: "zxmcnsf478",
        status: true
      },
      {
        id: 7,
        email: "sdklfhdkyteiufherujhr",
        status: true
      },
      {
        id: 6,
        email: "2",
        status: true
      },
      {
        id: 5,
        email: "sdklhfkjhfksdjhfjksjfhskdjfhsdkjfhkdfjghksghdkjghkdfj",
        status: true
      },
      {
        id: 2,
        email: "hello@gmail.com",
        status: true
      }
    ]
  });
}

function getSeasonList() {
  return fakeApiCall({
    total_rows: 3,
    objects: [
      {
        id: 3,
        start_time: "2022-02-01T10:16:11.907000",
        end_time: "2022-02-01T10:16:11.907000",
        price_factor: 44,
        seasonItemTypes: [
          {
            item_type: {
              id: 3,
              name: "Extra",
              maintenance: 0,
              delivery_available: true
            }
          },
          {
            item_type: {
              id: 1,
              name: "Boat",
              maintenance: 2,
              delivery_available: true
            }
          }
        ]
      },
      {
        id: 2,
        start_time: "2022-02-19T13:48:13.764000",
        end_time: "2022-03-05T13:48:13.764000",
        price_factor: 110,
        seasonItemTypes: []
      },
      {
        id: 1,
        start_time: "2022-02-19T13:48:13.764000",
        end_time: "2022-02-19T13:48:13.764000",
        price_factor: 0,
        seasonItemTypes: []
      }
    ],
    error: null
  });
}

function getLocationList() {
  return fakeApiCall({
    total_rows: 2,
    objects: [
      {
        id: 2,
        name: "loc-02",
        description: "Dummy Location 02",
        price_factor: 23
      },
      {
        id: 1,
        name: "NewParic",
        description: "stringLol",
        price_factor: 120
      }
    ]
  });
}

function getVoucherList() {
  return fakeApiCall({
    total_rows: 2,
    objects: [
      {
        id: 2,
        code: "stringAS updated",
        description: "string updated",
        price_factor: 34,
        status: false
      },
      {
        id: 1,
        code: "ACCCC",
        description: "string google",
        price_factor: 150,
        status: false
      }
    ]
  });
}

function getBookingStatusList() {
  return fakeApiCall({
    total_rows: 3,
    objects: [
      {
        id: 3,
        name: "Cancelled",
        color: "red"
      },
      {
        id: 2,
        name: "Closed",
        color: "blue"
      },
      {
        id: 1,
        name: "Active",
        color: "green"
      }
    ]
  });
}

const FAKE_API = {
  USE_FAKE: false,
  getBookingStatusList,
  getBookingWidgets,
  getPageBooking,
  getCustomParameters,
  getDayPickerList,
  updatePicker,
  getItemStatusList,
  getItemSubtypes,
  getItemTypes,
  getPageItems,
  getAllLanguages,
  getOrderStatusList,
  getPageOrders,
  getPaymentMethods,
  getTags,
  getTaxLists,
  getTimePickers,
  getAssociateEmails,
  getSeasonList,
  getLocationList,
  getVoucherList
};

export default FAKE_API;
