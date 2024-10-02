const predef = require("./tools/predef");

const { px, du, op, min } = require("./tools/graphics");


class sessions {

    init() {

        this.sessions = [
            { // londen session
                key: "london",
                timezone: "Europe/London",
                start_time: 700,
                end_time: 1700,
                fillStyle: {
                    color: "purple",
                    opacity: 20,
                }
            },
            {
                key: "new_york",
                timezone: "America/New_York",
                start_time: 930,
                end_time: 1700,
                fillStyle: {
                    color: "green",
                    opacity: 20,
                }
            },
            {
                key: "new_york_bullit",
                timezone: "America/New_York",
                start_time: 1000,
                end_time: 1100,
                fillStyle: {
                    color: "white",
                    opacity: 20,
                }
            },

            // {
            //     key: "tokio",
            //     timezone: "Asia/Tokyo",
            //     start_time: 1000,
            //     end_time: 1500,
            //     fillStyle: {
            //         color: "blue",
            //         opacity: 0,
            //     }
            // },
            // {
            //     key: "sydney",
            //     timezone: "Australia/Sydney",
            //     start_time: 1000,
            //     end_time: 1600,
            //     fillStyle: {
            //         color: "yellow",
            //         opacity: 0,
            //     }
            // },

            { // https://tradeday.freshdesk.com/support/solutions/articles/103000081072-can-i-trade-news-or-data-releases-
                key: "no_fly_zone_1",
                timezone: "America/Chicago",
                start_time: 1255,
                end_time: 1305,
                fillStyle: {
                    color: "red",
                    opacity: 50.0,
                }
            },
            {
                key: "no_fly_zone_2",
                timezone: "America/Chicago",
                start_time: 725,
                end_time: 735,
                fillStyle: {
                    color: "red",
                    opacity: 50.0,
                }
            },
        ];


    }

    changeTimezone(date, ianatz) {

        let utcDate = date;// new Date(date.toLocaleString('en-US', { timeZone: "UTC" }));
        let tzDate = new Date(date.toLocaleString('en-US', { timeZone: ianatz }));
        let offset = utcDate.getTime() - tzDate.getTime();
        let nd = new Date();
        nd.setTime(date.getTime() - offset);
        return nd
    }


    map(d, i, history) {
        let items = [];

        for (const session of this.sessions) {

            let startDate = d.timestamp() // UTC
            let nyDate = this.changeTimezone(startDate, session.timezone)

            let hr_min = nyDate.getHours() * 100 + nyDate.getMinutes();
            if (hr_min >= session.start_time && hr_min < session.end_time) {

                items.push({
                    tag: "Shapes",
                    key: session.key,
                    primitives: [
                        {
                            tag: "Rectangle",
                            position: {
                                x: du(d.index() - 0.5),
                                y: px(0),
                            },
                            size: {
                                height: px(1000),
                                width: du(1.0),
                            },
                        },
                    ],
                    fillStyle: session.fillStyle
                });
            }
        }



        return {
            graphics: {
                items: items,
                // global: true,
            },
        };
    }
}

module.exports = {
    name: "sessions",
    description: "sessions",
    inputType: "bars",
    calculator: sessions,
    tags: ["My Indicators"],
    params: {
    },
};
