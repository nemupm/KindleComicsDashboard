import { KindleComic, KindleComicSeries } from '../models/kindle';
const XMLParser = require('react-xml-parser');

const MAX_DISTANCE = 3;
const DEFAULT_INTERVAL_DAYS = 180;
const DAY_MILLISECONDS = 60 * 60 * 24 * 1000;

export class KindleService {
  public getKindleComicSeries(): KindleComicSeries[] {
    const comics = this.getAllKindleComics();
    return this.generateKindleComicSeriesFromKindleComics(comics);
  }

  public getAllKindleComics(): KindleComic[] {
    const xmlString = this.getKindleXML();

    // parse xml
    let xml = new XMLParser().parseFromString(xmlString);
    const comics = [];
    for (const metaData of xml.getElementsByTagName('meta_data')) {
      const comic: KindleComic = {
        id: comics.length,
        title: metaData.getElementsByTagName('title')[0].value.trim(),
        author: metaData.getElementsByTagName('author')[0].value.trim(),
        publication_date: new Date(
          metaData.getElementsByTagName('publication_date')[0].value.trim()
        )
      };
      comics.push(comic);
    }
    return comics;
  }

  public getKindleXML() {
    return `
            <response>
                <sync_time>
                    SYNC_TIME
                </sync_time>
                <cache_metadata>
                    <version>
                        1
                    </version>
                </cache_metadata>
                <add_update_list>
                    <meta_data>
                        <asin>
                            ASIN
                        </asin>
                        <title pronunciation="title">
                            TITLE_LEFT（１）TITLE_RIGHT
                        </title>
                        <authors>
                            <author pronunciation="author">
                                AUTHOR
                            </author>
                        </authors>
                        <publishers>
                            <publisher>
                                PUBLISHER
                            </publisher>
                        </publishers>
                        <publication_date>
                            2017-12-04T00:00:00+0000
                        </publication_date>
                        <purchase_date>
                            2017-12-04T00:00:00+0000
                        </purchase_date>
                        <textbook_type>
                        </textbook_type>
                        <cde_contenttype>
                            EBOK
                        </cde_contenttype>
                        <content_type>
                            application/x-mobipocket-ebook
                        </content_type>
                    </meta_data>
                    <meta_data>
                        <asin>
                            ASIN
                        </asin>
                        <title pronunciation="title">
                            TITLE_LEFT（２）TITLE_RIGHT
                        </title>
                        <authors>
                            <author pronunciation="author">
                                AUTHOR
                            </author>
                        </authors>
                        <publishers>
                            <publisher>
                                PUBLISHER
                            </publisher>
                        </publishers>
                        <publication_date>
                            2018-03-16T00:00:00+0000
                        </publication_date>
                        <purchase_date>
                            2018-03-16T00:00:00+0000
                        </purchase_date>
                        <textbook_type>
                        </textbook_type>
                        <cde_contenttype>
                            EBOK
                        </cde_contenttype>
                        <content_type>
                            application/x-mobipocket-ebook
                        </content_type>
                    </meta_data>
                    <meta_data>
                        <asin>
                            ASIN
                        </asin>
                        <title pronunciation="title">
                            TITLE_LEFT（３）TITLE_RIGHT
                        </title>
                        <authors>
                            <author pronunciation="author">
                                AUTHOR
                            </author>
                        </authors>
                        <publishers>
                            <publisher>
                                PUBLISHER
                            </publisher>
                        </publishers>
                        <publication_date>
                            2018-06-16T00:00:00+0000
                        </publication_date>
                        <purchase_date>
                            2018-06-16T00:00:00+0000
                        </purchase_date>
                        <textbook_type>
                        </textbook_type>
                        <cde_contenttype>
                            EBOK
                        </cde_contenttype>
                        <content_type>
                            application/x-mobipocket-ebook
                        </content_type>
                    </meta_data>
                    <meta_data>
                        <asin>
                            ASIN
                        </asin>
                        <title pronunciation="title">
                            TITLE 第1巻
                        </title>
                        <authors>
                            <author pronunciation="author">
                                著者
                            </author>
                        </authors>
                        <publishers>
                            <publisher>
                                出版社
                            </publisher>
                        </publishers>
                        <publication_date>
                            2018-04-05T00:00:00+0000
                        </publication_date>
                        <purchase_date>
                            2018-04-06T00:00:00+0000
                        </purchase_date>
                        <textbook_type>
                        </textbook_type>
                        <cde_contenttype>
                            EBOK
                        </cde_contenttype>
                        <content_type>
                            application/x-mobipocket-ebook
                        </content_type>
                    </meta_data>
                    <meta_data>
                        <asin>
                            ASIN
                        </asin>
                        <title pronunciation="title">
                            TITLE 第2巻
                        </title>
                        <authors>
                            <author pronunciation="author">
                                著者
                            </author>
                        </authors>
                        <publishers>
                            <publisher>
                                出版社
                            </publisher>
                        </publishers>
                        <publication_date>
                            2018-09-05T00:00:00+0000
                        </publication_date>
                        <purchase_date>
                            2018-09-06T00:00:00+0000
                        </purchase_date>
                        <textbook_type>
                        </textbook_type>
                        <cde_contenttype>
                            EBOK
                        </cde_contenttype>
                        <content_type>
                            application/x-mobipocket-ebook
                        </content_type>
                    </meta_data>
                    <meta_data>
                        <asin>
                            ASIN
                        </asin>
                        <title pronunciation="title">
                            INDEPENDENT TITLE
                        </title>
                        <authors>
                            <author pronunciation="author">
                                CHOSHA
                            </author>
                        </authors>
                        <publishers>
                            <publisher>
                                SHUPPANSHA
                            </publisher>
                        </publishers>
                        <publication_date>
                            2018-01-05T00:00:00+0000
                        </publication_date>
                        <purchase_date>
                            2018-01-06T00:00:00+0000
                        </purchase_date>
                        <textbook_type>
                        </textbook_type>
                        <cde_contenttype>
                            EBOK
                        </cde_contenttype>
                        <content_type>
                            application/x-mobipocket-ebook
                        </content_type>
                    </meta_data>
                </add_update_list>
            </response>
            `;
  }

  private generateKindleComicSeriesFromKindleComics(
    comics: KindleComic[]
  ): KindleComicSeries[] {
    const comicGroups = this.groupingKindleComics(comics);

    const res = [];
    for (const groupId of Object.keys(comicGroups)) {
      const seriesComics: KindleComic[] = comicGroups[groupId].map(
        (comicId: number) => comics[comicId]
      );
      const kindleComicSeries: KindleComicSeries = {
        titleLeft: '',
        titleRight: '',
        author: seriesComics[0].author,
        comics: seriesComics,
        publication_interval_days: DEFAULT_INTERVAL_DAYS
      };

      if (seriesComics.length === 1) {
        kindleComicSeries.titleLeft = seriesComics[0].title;
      } else {
        kindleComicSeries.titleLeft = this.getCommonString(
          seriesComics[0].title,
          seriesComics[1].title,
          true
        );
        kindleComicSeries.titleRight = this.getCommonString(
          seriesComics[0].title,
          seriesComics[1].title,
          false
        );
        kindleComicSeries.publication_interval_days = this.calculateAverageIntervalDays(
          seriesComics.map(comic => comic.publication_date)
        );
      }

      res.push(kindleComicSeries);
    }

    return res;
  }

  private groupingKindleComics(
    comics: KindleComic[]
  ): { [groupId: number]: number[] } {
    const comicGroups: { [groupId: number]: number[] } = {};
    const groupIdsIndexedByTwoCharacters: {
      left: {
        [index: string]: number[];
      };
      right: {
        [index: string]: number[];
      };
    } = { left: {}, right: {} };

    // grouping KindleComics by LevenshteinDistance <= MAX_DISTANCE
    for (const comic of comics) {
      let myGroupId = -1;

      for (const isLeft of [true, false]) {
        if (myGroupId !== -1) {
          break;
        }

        const index = isLeft ? comic.title.slice(0, 2) : comic.title.slice(-2);
        const groupIds =
          groupIdsIndexedByTwoCharacters[isLeft ? 'left' : 'right'][index];
        if (!groupIds) {
          continue;
        }

        for (const groupId of groupIds) {
          const anotherComic = comics[comicGroups[groupId][0]];
          const distance = this.calculateLevenshteinDistance(
            comic.title,
            anotherComic.title
          );

          // add comic to existing group
          if (distance <= MAX_DISTANCE) {
            comicGroups[groupId].push(comic.id);
            myGroupId = groupId;
          }
        }
      }

      // there is no group for comic to join
      if (myGroupId === -1) {
        myGroupId = comic.id;
        comicGroups[myGroupId] = [comic.id];
        for (const isLeft of [true, false]) {
          const index = isLeft
            ? comic.title.slice(0, 2)
            : comic.title.slice(-2);
          if (
            groupIdsIndexedByTwoCharacters[isLeft ? 'left' : 'right'][index]
          ) {
            groupIdsIndexedByTwoCharacters[isLeft ? 'left' : 'right'][
              index
            ].push(myGroupId);
          } else {
            groupIdsIndexedByTwoCharacters[isLeft ? 'left' : 'right'][index] = [
              myGroupId
            ];
          }
        }
      }
    }

    return comicGroups;
  }

  private calculateLevenshteinDistance(str1: string, str2: string): number {
    const dp = new Array(str1.length + 1);
    for (let y = 0; y <= str1.length; y++) {
      dp[y] = new Array(str2.length + 1).fill(0);
    }

    for (let i = 0; i <= str1.length; i++) {
      dp[i][0] = i;
    }
    for (let i = 0; i <= str2.length; i++) {
      dp[0][i] = i;
    }

    for (let i = 1; i <= str1.length; i++) {
      for (let j = 1; j <= str2.length; j++) {
        const cost = str1[i] === str2[j] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }

    return dp[str1.length][str2.length];
  }

  private getCommonString(str1: string, str2: string, isLeft: boolean): string {
    let commonString = '';
    if (isLeft) {
      for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (str1[i] !== str2[i]) {
          return commonString;
        }
        commonString += str1[i];
      }
    } else {
      for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (str1[str1.length - i - 1] !== str2[str2.length - i - 1]) {
          return commonString;
        }
        commonString = str1[str1.length - i - 1] + commonString;
      }
    }
    return commonString;
  }

  private calculateAverageIntervalDays(dates: Date[]): number {
    if (dates.length <= 1) {
      return DEFAULT_INTERVAL_DAYS;
    }

    let sortedDates = dates.slice().sort((a, b) => {
      return a.getTime() - b.getTime();
    });
    const diffDates = [];
    for (let i = 1; i < sortedDates.length; i++) {
      const deltaMillseconds =
        sortedDates[i].getTime() - sortedDates[i - 1].getTime();
      const deltaDays = deltaMillseconds / DAY_MILLISECONDS;
      diffDates.push(deltaDays);
    }
    const sum = diffDates.reduce((prev, current) => prev + current);
    const average = sum / diffDates.length;

    return average;
  }
}
