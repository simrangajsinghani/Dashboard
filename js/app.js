document.querySelectorAll(".sidebar-submenu").forEach((e) => {
  e.querySelector(".sidebar-menu-dropdown").onclick = (event) => {
    event.preventDefault();
    e.querySelector(".sidebar-menu-dropdown .dropdown-icon").classList.toggle(
      "active"
    );

    let dropdown_content = e.querySelector(".sidebar-menu-dropdown-content");
    console.log(dropdown_content);
    let dropdown_content_lis = dropdown_content.querySelectorAll("li");
    console.log(dropdown_content_lis);
    let nh = dropdown_content_lis[0].clientHeight;
    console.log(nh);

    let active_height =
      dropdown_content_lis[0].clientHeight * dropdown_content_lis.length;
    console.log(active_height);

    dropdown_content.classList.toggle("active");

    dropdown_content.style.height = dropdown_content.classList.contains(
      "active"
    )
      ? active_height + "px"
      : "0";
  };
});

let category_options = {
  series: [44, 55, 41, 17],
  labels: ["Health Care", "Skin Smooth", "Smooth Lotion", "Mamaearth Products"],
  chart: {
    type: "donut",
  },
  colors: ["#6ab04c", "#2980b9", "#f39c12", "#d35400"],
};

let category_chart = new ApexCharts(
  document.querySelector("#category-chart"),
  category_options
);
category_chart.render();

let customer_options = {
  series: [
    {
      name: "Store Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Online Customers",
      data: [20, 30, 10, 20, 16, 40, 20, 51, 10],
    },
  ],
  colors: ["#6ab04c", "#2980b9"],
  chart: {
    height: 350,
    type: "line",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
  legend: {
    position: "top",
  },
};

let customer_chart = new ApexCharts(
  document.querySelector("#customer-chart"),
  customer_options
);
customer_chart.render();
