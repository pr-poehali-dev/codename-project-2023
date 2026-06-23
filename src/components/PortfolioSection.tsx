import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import Icon from "@/components/ui/icon"

const formats = [
  {
    title: "Пеший курьер",
    icon: "Footprints",
    income: "от 60 000 ₽/мес",
    description:
      "Доставка по центру и плотным районам в пределах пешей доступности. Идеально для старта без транспорта и вложений.",
    features: ["Транспорт не нужен", "Зона рядом с домом", "Подходит студентам"],
  },
  {
    title: "Велокурьер",
    icon: "Bike",
    income: "от 90 000 ₽/мес",
    description:
      "Доставка на велосипеде или электросамокате. Больше заказов за смену и выше доход. Поможем с арендой транспорта.",
    features: ["Аренда транспорта", "Больше заказов", "Активный формат"],
  },
  {
    title: "Авто-курьер",
    icon: "Car",
    income: "от 120 000 ₽/мес",
    description:
      "Доставка на личном автомобиле — крупные заказы и длинные маршруты. Максимальный доход и компенсация топлива.",
    features: ["Компенсация топлива", "Крупные заказы", "Высокий доход"],
  },
  {
    title: "Курьер на мото/скутере",
    icon: "Bike",
    income: "от 110 000 ₽/мес",
    description:
      "Быстрая доставка на мотоцикле или скутере по всей Москве. Минимум пробок, максимум выполненных заказов за день.",
    features: ["Гибкие маршруты", "Минимум пробок", "Высокая ставка"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Форматы работы
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Выберите, как зарабатывать</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Пеший, на велосипеде, скутере или авто — мы найдём формат под вас. Чем мобильнее, тем выше доход.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formats.map((format, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Icon name={format.icon} size={28} />
                  </div>
                  <span className="text-primary font-bold text-lg">{format.income}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{format.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{format.description}</p>
                <div className="flex flex-wrap gap-2">
                  {format.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                    >
                      <Check className="h-3 w-3 text-primary" />
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
